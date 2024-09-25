/**
 * A generic RingBuffer class that stores a fixed number of elements in a circular buffer.
 * Once the buffer is full, older elements are overwritten with new ones, that is, in a FIFO style. 
 *
 * @template T - The type of elements stored in the buffer.
 */
export class RingBuffer<T> {
  protected readonly capacity: number;
  protected head: number = 0;
  protected tail: number = 0;
  protected array: T[];
  protected occupancy: number = 0;

  /**
   * Creates an instance of a RingBuffer with a specified capacity.
   * 
   * @param capacity - The maximum number of elements the buffer can hold.
   */
  constructor(capacity: number) {
    this.capacity = capacity;
    this.array = new Array<T>(capacity);
  }

  /**
   * Adds an item to the buffer. If the buffer is full, it overwrites the oldest item.
   *
   * @param item - The item to be added to the buffer.
   */
  public push(item: T): void {
    if (this.occupancy === this.capacity) {
      // full, pop
      this.occupancy -= 1;
      this.head = (this.head + 1) % this.capacity;
    }

    this.array[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;
    this.occupancy += 1;
  }


  /**
   * Removes and returns the oldest item from the buffer.
   * 
   * @returns The oldest item, or `null` if the buffer is empty.
   */
  public pop(): T | null {
    if (this.occupancy === 0) {
      return null;
    }
    const item = this.array[this.head];
    this.head = (this.head + 1) % this.capacity;
    this.occupancy -= 1;
    return item;
  }

  /**
   * Returns the oldest item in the buffer without removing it.
   * 
   * @returns The oldest item, or `null` if the buffer is empty.
   */
  public peek(): T | null {
    if (this.occupancy === 0) {
      return null;
    }
    return this.array[this.head];
  }

  /**
   * Applies a callback function to each item in the buffer and returns a new array with the results.
   *
   * @param callback - A function to apply to each item in the buffer.
   * @returns An array of the results after applying the callback function.
   */
  public map<U>(callback: (value: T) => U): U[] {
    let index = this.head;
    let result: U[] = new Array<U>(this.occupancy);
    for (let i = 0; i < this.occupancy; ++i) {
      result[i] = callback(this.array[index]);
      index = (index + 1) % this.capacity;
    }
    return result;
  }

  /**
   * Reduces the buffer contents into a single value by applying a callback function.
   *
   * @param callback - A function to reduce each item with an accumulator.
   * @param acc - The initial value of the accumulator.
   * @returns The final result after reducing all elements.
   */
  public reduce<U>(callback: (acc: U, value: T) => U, acc: U): U {
    let index = this.head;
    for (let i = 0; i < this.occupancy; ++i) {
      acc = callback(acc, this.array[index]);
      index = (index + 1) % this.capacity;
    }
    return acc;
  }

  /**
   * Returns the contents of the buffer as an array, ordered from oldest to newest.
   * 
   * @returns An array containing all elements in the buffer.
   */
  public toArray(): T[] {
    return [
      ...this.array.slice(this.head),
      ...this.array.slice(undefined, this.tail),
    ];
  }
}

/**
 * A specialized RingBuffer for handling numeric data, extending RingBuffer<number> (FIFO-style).
 * Provides additional methods for calculating numeric aggregates of buffer contents.
 */
export class NumericRingBuffer extends RingBuffer<number> {
  /**
   * Calculates the mean (average) of the numeric values in the buffer.
   *
   * @returns The mean of the buffer values, or `null` if the buffer is empty.
   */
  protected _sum: number = 0;

  public mean(): number | null {
    if (this.occupancy > 0) {
      return this.sum() / this.occupancy;
    }
    return null;
  }

  /**
   * Calculates the sum of the numeric values in the buffer.
   *
   * @returns The sum of all values in the buffer.
   */
  public sum(): number {
    // IDEA: this could store the sum value in the object instead of recalculating. recalculate only on push and pop (hijack those from parent.). Only if the extra performance is really needed
    return this.reduce((acc, v) => acc + v, 0);
  }
}
