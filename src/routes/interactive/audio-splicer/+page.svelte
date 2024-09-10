<script lang="ts">
  enum AudioPlayerState {
    EMPTY,
    RECORDING,
    PLAYING,
    PAUSED,
  }

  let audioPlayerState: AudioPlayerState = AudioPlayerState.EMPTY;

  let pauseButton: HTMLButtonElement;
  let playButton: HTMLButtonElement;
  let recordButton: HTMLButtonElement;
  let audioPlayer: HTMLAudioElement;

  let mediaRecorder: MediaRecorder;
  let audioRecordingStreamChunks: Blob[] = [];
  let audioBlob: Blob | null | undefined = undefined;

  function handlePlay() {
    if (audioBlob) {
      audioPlayer.play();
    }
  }
  function handlePause() {
    audioPlayer.pause();
  }
  async function handleRecord() {
    if (!mediaRecorder || mediaRecorder.state === "inactive") {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioPlayerState = AudioPlayerState.RECORDING;

      mediaRecorder.ondataavailable = (event) => {
        audioRecordingStreamChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        audioBlob = new Blob(audioRecordingStreamChunks, {
          type: "audio/webm",
        });
        audioRecordingStreamChunks = [];
        const audioURL = URL.createObjectURL(audioBlob);
        audioPlayer.src = audioURL;
        audioPlayerState = AudioPlayerState.PAUSED;
      };

      mediaRecorder.start();
      recordButton.textContent = "Stop";
    } else {
      mediaRecorder.stop();
      recordButton.textContent = "Record";
    }
  }
</script>

<button bind:this={playButton} on:click={handlePlay}>Play</button>
<button bind:this={pauseButton} on:click={handlePause}>Pause</button>
<button bind:this={recordButton} on:click={handleRecord}>Record</button>
<audio bind:this={audioPlayer} controls hidden></audio>

<pre>
  audioblob={audioBlob?.size}
  mediaRecorder={mediaRecorder}
  audioRecordingStreamChunks.length={audioRecordingStreamChunks.length}
</pre>

<style>
  button {
    @apply rounded-md border border-black p-2;
  }
</style>
