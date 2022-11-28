import { isObject } from './predicate/isObject';

export const has = <K extends string>(
    key: K,
    x: unknown,
): x is { [key in K]: unknown } => isObject(x) && key in x;
