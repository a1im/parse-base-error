import { ParsedBaseError } from '../ParsedBaseError';

export const baseErrorFactory = (...args: ConstructorParameters<typeof ParsedBaseError>) => new ParsedBaseError(...args);
