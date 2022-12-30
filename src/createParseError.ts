import { updateErrorTitles } from './helpers/updateErrorTitles';
import { ParsedBaseError } from './ParsedBaseError';
import { has } from './utils/has';
import { isDef } from './utils/predicate/isDef';
import { baseErrorFactory } from './helpers/baseErrorFactory';

export const createParseError = <
    T extends ParsedBaseError,
>({
    name = 'ParsedBaseError',
    showDate = true,
    errorFactory = baseErrorFactory as any,
}: {
    name?: string
    showDate?: boolean
    errorFactory?: (...args: ConstructorParameters<typeof ParsedBaseError>) => T
} = {}) => (
    e: unknown,
    title?: string,
    data?: unknown,
): T => {
    const strTitle = title ? `[${title}]` : '';
    const errorData: unknown[] = [];
    const isParsedError = (
        has('plainMessage', e)
        && has('data', e)
        && has('title', e)
        && has('hideLog', e)
    );

    if (isParsedError && Array.isArray(e.data)) {
        errorData.push(...e.data);
    } else if (has('data', e) && isDef(e.data)) {
        errorData.push(e.data);
    }

    if (isDef(data)) {
        errorData.push(data);
    }

    if (isParsedError) {
        return errorFactory(
            String(e.plainMessage),
            {
                title: updateErrorTitles([
                    String(e.title),
                    strTitle,
                ]),
                data: errorData,
                hideLog: Boolean(e.hideLog),
            },
        );
    }
    const errorDate = new Date().toISOString();
    const titleDate = `[${name}${showDate ? ` ${errorDate}` : ''}]`;
    const newTitle = updateErrorTitles([
        titleDate,
        strTitle,
    ]);

    if (has('message', e)) {
        return errorFactory(
            String(e.message),
            {
                title: newTitle,
                data: errorData,
            },
        );
    }

    return errorFactory(
        'Unhandled error',
        {
            title: newTitle,
            data: [e, ...errorData],
        },
    );
};
