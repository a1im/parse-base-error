import { parseBaseError, ParsedBaseError } from './index';

const error = parseBaseError(new ParsedBaseError(
    'test',
    {
        data: [1],
    },
));

error.log();
