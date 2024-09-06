import { assert } from "vitest";

export class Matrix {
  readonly rows: number;
  readonly cols: number;
  protected _impl: number[];
  public constructor(rows: number, cols: number, fill = 0) {
    this.rows = rows;
    this.cols = cols;
    this._impl = Array(rows * cols).fill(fill);
  }
  /** Returns the value of the cell with the corresponding row and col indices. May throw if oob. */
  public at(row: number, col: number): number {
    // TODO: OOB check
    return this._impl[row * this.cols + col];
  }

  public set(row: number, col: number, value: number) {
    // TODO: OOB check
    this._impl[row * this.cols + col] = value;
    return this;
  }

  public applyToCell(
    row: number,
    col: number,
    func: (x: number) => number,
  ): this {
    this.set(row, col, func(this.at(row, col)));
    return this;
  }

  public applyToAll(func: (x: number) => number) {
    for (let i = 0; i < this._impl.length; ++i) {
      this._impl[i] = func(this._impl[i]);
    }
    return this;
  }

  public copy() {
    let result = new Matrix(this.rows, this.cols);
    result._impl = [...this._impl];
    return result;
  }

  public shape(): [number, number] {
    return [this.rows, this.cols];
  }

  public toArrayOfArrays(): number[][] {
    let arr: number[][] = [];
    for (let i = 0; i < this.rows; ++i) {
      arr.push([]);
      for (let j = 0; j < this.cols; ++j) {
        arr[i].push(this.at(i, j));
      }
    }
    return arr;
  }

  public matMult(
    rightMatrix: Matrix,
    mutResultMatrix: Matrix | undefined = undefined,
  ): Matrix {
    if (rightMatrix.cols !== this.rows) {
      throw new Error(
        `ValueError: Incompatible matrix dimensions. Left matrix has ${this.rows} rows but right matrix has ${rightMatrix.cols} columns.`,
      );
    }
    // make sure the result matrix is also compatible if given.
    if (mutResultMatrix) {
      if (
        mutResultMatrix.rows !== this.rows ||
        mutResultMatrix.cols !== rightMatrix.cols
      ) {
        throw new Error(
          "ValueError: The result matrix has incompatible dimensions.",
        );
      }
    } else {
      mutResultMatrix = new Matrix(this.rows, rightMatrix.cols);
    }

    for (let i = 0; i < this.rows; ++i) {
      for (let j = 0; j < rightMatrix.cols; ++j) {
        let sum = 0;
        for (let k = 0; k < this.cols; ++k) {
          sum += this.at(i, k) * rightMatrix.at(k, j);
        }
        mutResultMatrix.set(i, j, sum);
      }
    }

    return mutResultMatrix;
  }

  public static identity(dimensions: number): Matrix {
    const newMatrix = new Matrix(dimensions, dimensions, 0);

    for (let i = 0; i < dimensions; ++i) {
      for (let j = 0; j < dimensions; ++j) {
        if (i === j) {
          newMatrix.set(i, j, 1);
        }
      }
    }

    return newMatrix;
  }

  public scale(scalar: number) {
    return this.applyToAll((x) => x * scalar);
  }

  public static fromArray(
    array: Array<number>,
    shape: [number, number],
  ): Matrix {
    if (array.length !== shape[0] * shape[1]) {
      throw new Error("ValueError: Incompatible dimensions.");
    }
    const m = new Matrix(shape[0], shape[1]);
    m._impl = array;
    return m;
  }

  public static fromArrayOfArrays(array: number[][]): Matrix {
    let result = new Matrix(array.length, array[0].length);
    for (let row = 0; row < array.length; ++row) {
      if (array[row].length !== array[0].length) {
        throw new Error(
          `ValueError: row #${row} of this array has an invalid length. Expected ${array[0].length}, found ${array[row].length}.`,
        );
      }
      for (let col = 0; col < array[row].length; ++col) {
        result.set(row, col, array[row][col]);
      }
    }
    return result;
  }

  public static rot2D(angleInRadians: number): Matrix {
    return Matrix.fromArray(
      [
        Math.cos(angleInRadians),
        -Math.sin(angleInRadians),
        Math.sin(angleInRadians),
        Math.cos(angleInRadians),
      ],
      [2, 2],
    );
  }

  public static rot2DDegrees(angleInDegrees: number): Matrix {
    const TwoPiOver360 = 0.01745329251;
    const angleInRadians = angleInDegrees * TwoPiOver360;

    return Matrix.rot2D(angleInRadians);
  }

  public getRow(row: number): number[] {
    // TODO: oob check
    const start = row * this.cols;
    return this._impl.slice(start, start + this.cols + 1);
  }

  public getCol(col: number): number[] {
    // TODO: oob check
    let res = [];
    for (let i = 0; i < this.rows; ++i) {
      res.push(this.at(i, col));
    }
    return res;
  }

  public transpose(): this {
    if (this.rows !== this.cols) {
      throw new Error("Needs to be a square matrix to transpose.");
    }
    for (let i = 0; i < this.cols; ++i) {
      for (let j = i + 1; j < this.rows; ++j) {
        this.swap(i, j, j, i);
      }
    }
    return this;
  }

  swap(rowA: number, colA: number, rowB: number, colB: number): void {
    const valA = this.at(rowA, colA);
    const valB = this.at(rowB, colB);
    this.set(rowA, colA, valB);
    this.set(rowB, colB, valA);
  }

  /** Applies the matrix's linear transformation to the 2D vector. Mutates the Vector _in place_ and returns it. */
  public transformVec2<T>(vec: T & { x: number; y: number }): T {
    if (this.cols !== 2 || this.rows !== 2) {
      throw new Error(
        "Incompatible matrix size. Need a 2x2 matrix to operate on Vec2's.",
      );
    }
    const newX = vec.x * this.at(0, 0) + vec.y * this.at(0, 1);
    const newY = vec.x * this.at(1, 0) + vec.y * this.at(1, 1);
    vec.x = newX;
    vec.y = newY;
    return vec;
  }
}