import { createParseError, baseErrorFactory } from './index';

const parseError = createParseError({
    name: 'ErrorName',
    errorFactory: baseErrorFactory,
});
const foo = async () => {
    try {
        await Promise.reject(new Error('Hello world'));
    } catch (e) {
        throw parseError(e, 'foo', { hello: 'world' });
    }
};
const bar = async () => {
    try {
        await foo();
    } catch (e) {
        const error = parseError(e, 'bar', 'bar')
            .log(); // [ErrorName 2022-11-28T13:11:54.942Z]->[foo]->[bar]: hello world [{"hello":"world"},"bar"]

        console.log(error.data); // [ { hello: 'world' }, 'bar' ]
    }
};

bar();
