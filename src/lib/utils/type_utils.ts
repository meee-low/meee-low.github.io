export function onlyChangedFields<T extends Object>(old: T, newObj: T): Partial<T> {
  const result: Partial<T> = {};

  for (const key in newObj) {
    if (old.hasOwnProperty(key) && newObj.hasOwnProperty(key)) {
      if (old[key] !== newObj[key]) {
        result[key] = newObj[key];
      }
    }
  }

  return result;
}

export function pick<T extends Object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

export function pickFrom<T extends Object, K extends keyof T>(obj: T, model: Record<K, any>): Pick<T, K> {
  const result = {} as Pick<T, K> ;
  for (const key in model) {
      if (key in obj) {
        result[key] = obj[key];
      }
  }
  return result;
}