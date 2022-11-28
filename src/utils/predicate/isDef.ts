export const isDef = <T>(val: T): val is Exclude<T, undefined | null> => val !== undefined && val !== null;
