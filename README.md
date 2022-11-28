# parse-base-error

[![NPM](https://img.shields.io/npm/v/parse-base-error.svg?style=flat-square)](https://www.npmjs.com/package/parse-base-error)
[![Downloads](https://img.shields.io/npm/dm/parse-base-error?style=flat-square)](https://www.npmjs.com/package/parse-base-error)

## Install
```
yarn add parse-base-error
# or
npm i parse-base-error
```

## Example

```ts
import { parseBaseError } from 'parse-base-error';

const foo = async () => {
    try {
        await Promise.reject(new Error('Hello world'));
    } catch (e) {
        throw parseBaseError(e, 'foo', { hello: 'world' });
    }
};
const bar = async () => {
    try {
        await foo();
    } catch (e) {
        const error = parseBaseError(e, 'bar', 'bar')
            .log(); // [ParsedBaseError 2022-11-28T13:11:54.942Z]->[foo]->[bar]: hello world [{"hello":"world"},"bar"]

        console.log(error.data); // [ { hello: 'world' }, 'bar' ]
    }
};

bar();

```

## License
MIT
