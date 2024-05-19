import { writable, type Writable } from "svelte/store";

const BLOCK_STAMINA_PENALTY_PER_FRAME = 2;
const BLOCK_STAMINA_PENALTY_ON_HIT = 10;
const ATTACK_CHARGE_PER_FRAME = 100 / 13;
const BLOCK_STAMINA_RECOVERY_PER_FRAME = BLOCK_STAMINA_PENALTY_PER_FRAME / 10;
const STARTING_PARRY_FRAMES = 3;

export interface PlayerState {
  status: string;
  score: number;
  roundWon: number;
  blockStamina: number;
  parryFrames: number;
  attackCharge: number;
  keysHeld: Set<string>;
}

export interface GameState {
  playerOneState: PlayerState;
  playerTwoState: PlayerState;
  globals: {
    roundFrameCount: number;
    roundCount: number;
  };
}

export let gameState: Writable<GameState> = writable({
  playerOneState: {
    status: "neutral",
    score: 0,
    roundWon: 0,
    blockStamina: 100,
    attackCharge: 0,
    parryFrames: 0,
    keysHeld: new Set<string>(),
  },
  playerTwoState: {
    status: "neutral",
    score: 0,
    roundWon: 0,
    blockStamina: 100,
    attackCharge: 0,
    parryFrames: 0,
    keysHeld: new Set<string>(),
  },
  globals: {
    roundCount: 0,
    roundFrameCount: 0,
  },
});

// ==== Attacks ====

function handleAttack(gameState: GameState): GameState {
  if (
    gameState.playerOneState.attackCharge < 100 &&
    gameState.playerTwoState.attackCharge < 100
  ) {
    // No attacks happening this frame.
    return gameState;
  } else if (
    gameState.playerOneState.attackCharge >= 100 &&
    gameState.playerTwoState.attackCharge >= 100
  ) {
    // Double hit.
    // TODO: Apply correct rules for double hit.
    return gameState;
  }

  let attackingPlayerNumber =
    gameState.playerOneState.attackCharge >
    gameState.playerTwoState.attackCharge
      ? 1
      : 2;
  gameState = handleAttackInner(gameState, attackingPlayerNumber);
  return gameState;
}

function getPlayerStateByNumber(
  gameState: GameState,
  playerNumber: number,
): PlayerState {
  if (playerNumber === 1) {
    return gameState.playerOneState;
  }
  if (playerNumber === 2) {
    return gameState.playerTwoState;
  }
  throw new Error("Invalid player id. Only 2 people play this game.");
}

function handleAttackInner(gameState: GameState, attacker: number): GameState {
  let attackerState = getPlayerStateByNumber(gameState, attacker);
  // 1 -> 2, 2 -> 1
  let defenderState = getPlayerStateByNumber(gameState, (attacker % 2) + 1);

  if (defenderState.parryFrames > 0) {
    // Parry
    defenderState.score += 1;
    gameState = resetRound(gameState);
  } else if (
    defenderState.status === "blocking" &&
    defenderState.blockStamina >= 0
  ) {
    // Blocked
    defenderState.blockStamina = Math.max(
      0,
      defenderState.blockStamina - BLOCK_STAMINA_PENALTY_ON_HIT,
    );
  } else if (defenderState.status === "neutral") {
    // Hit
    attackerState.score += 1;
    gameState = resetRound(gameState);
  }

  attackerState.attackCharge = 0;
  return gameState;
}

// ==== Inputs and States ====

function calculateStateFromInputs(playerState: PlayerState): PlayerState {
  if (
    (playerState.keysHeld.has("def") && playerState.keysHeld.has("atk")) ||
    (!playerState.keysHeld.has("def") && !playerState.keysHeld.has("atk"))
  ) {
    // Both pressed cancels. None pressed is obviously neutral.
    playerState.status = "neutral";
    playerState.attackCharge = 0;
  } else if (playerState.keysHeld.has("atk")) {
    playerState.status = "attacking";
  } else if (playerState.keysHeld.has("def")) {
    playerState.attackCharge = 0;
    if (playerState.status !== "blocking") {
      // If wasn't blocking before, enter parry mode.
      playerState.parryFrames = STARTING_PARRY_FRAMES;
    }
    if (playerState.blockStamina > 0) {
      // If still has stamina to block, block.
      playerState.status = "blocking";
    }
  }

  return playerState;
}

// ==== Inputs ====

export function handleKeyEventWrapper(
  gameState: GameState,
  event: KeyboardEvent,
  callback: (gameState: GameState, newInput: string) => GameState,
): GameState {
  const relevantKeys = ["a", "A", "d", "D", "ArrowLeft", "ArrowRight"];
  if (relevantKeys.includes(event.key)) {
    event.preventDefault();
    gameState = callback(gameState, event.key);
  }
  return gameState;
}

export function handleKeyDown(
  gameState: GameState,
  event: KeyboardEvent,
): GameState {
  return handleKeyEventWrapper(gameState, event, handleKeyDownInner);
}

export function handleKeyUp(
  gameState: GameState,
  event: KeyboardEvent,
): GameState {
  return handleKeyEventWrapper(gameState, event, handleKeyUpInner);
}

function handleKeyDownInner(gameState: GameState, newInput: string): GameState {
  if (newInput === "a" || newInput === "A") {
    gameState.playerOneState.keysHeld.add("def");
  } else if (newInput === "d" || newInput === "D") {
    gameState.playerOneState.keysHeld.add("atk");
  } else if (newInput === "ArrowLeft") {
    gameState.playerTwoState.keysHeld.add("atk");
  } else if (newInput === "ArrowRight") {
    gameState.playerTwoState.keysHeld.add("def");
  }
  return gameState;
}

function handleKeyUpInner(gameState: GameState, newInput: string): GameState {
  if (newInput === "a" || newInput === "A") {
    gameState.playerOneState.keysHeld.delete("def");
  }
  if (newInput === "d" || newInput === "D") {
    gameState.playerOneState.keysHeld.delete("atk");
  }
  if (newInput === "ArrowLeft") {
    gameState.playerTwoState.keysHeld.delete("atk");
  }
  if (newInput === "ArrowRight") {
    gameState.playerTwoState.keysHeld.delete("def");
  }
  return gameState;
}

// ==== Meters ====

function chargeUpAttacks(playerState: PlayerState): PlayerState {
  if (playerState.status === "attacking") {
    playerState.attackCharge = Math.min(
      100,
      playerState.attackCharge + ATTACK_CHARGE_PER_FRAME,
    );
  }

  return playerState;
}

function chargeDownBlocks(playerState: PlayerState): PlayerState {
  if (playerState.status === "blocking") {
    playerState.blockStamina = Math.max(
      0,
      playerState.blockStamina - BLOCK_STAMINA_PENALTY_PER_FRAME,
    );
    playerState.parryFrames = Math.max(0, playerState.parryFrames - 1);
  }
  return playerState;
}

function regenerateStamina(playerState: PlayerState): PlayerState {
  if (playerState.status !== "blocking") {
    playerState.blockStamina = Math.min(
      100,
      playerState.blockStamina + BLOCK_STAMINA_RECOVERY_PER_FRAME,
    );
  }
  return playerState;
}

// Reset

function resetPlayerState(playerState: PlayerState): PlayerState {
  playerState = {
    ...playerState,
    attackCharge: 0,
    blockStamina: 100,
    parryFrames: 0,
  };
  return playerState;
}

function resetRound(gameState: GameState): GameState {
  gameState = {
    playerOneState: resetPlayerState(gameState.playerOneState),
    playerTwoState: resetPlayerState(gameState.playerTwoState),
    globals: {
      ...gameState.globals,
      roundCount: gameState.globals.roundCount + 1,
      roundFrameCount: 0,
    },
  };
  return gameState;
}

function applyToBothPlayers(
  gameState: GameState,
  callback: (playerState: PlayerState) => PlayerState,
): GameState {
  gameState = {
    ...gameState,
    playerOneState: callback(gameState.playerOneState),
    playerTwoState: callback(gameState.playerTwoState),
  };

  return gameState;
}


// ==== Update ====

export function update(gameState: GameState): GameState {
  // Handle inputs for change of states.
  gameState = applyToBothPlayers(gameState, calculateStateFromInputs);

  // Handle energy bars
  gameState = applyToBothPlayers(gameState, regenerateStamina);
  gameState = applyToBothPlayers(gameState, chargeUpAttacks);
  gameState = applyToBothPlayers(gameState, chargeDownBlocks);

  // Handle attacks.
  gameState = handleAttack(gameState);

  gameState.globals.roundFrameCount += 1;
  return gameState;
}
