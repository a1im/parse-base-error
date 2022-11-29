import { updateErrorTitles } from './helpers/updateErrorTitles';
import { ParsedBaseError } from './ParsedBaseError';
import { has } from './utils/has';
import { isDef } from './utils/predicate/isDef';

export const parseBaseError = (e: unknown, title?: string, data?: unknown): ParsedBaseError => {
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
        return new ParsedBaseError(
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
    const titleDate = `[ParsedBaseError ${errorDate}]`;
    const newTitle = updateErrorTitles([
        titleDate,
        strTitle,
    ]);

    if (has('message', e)) {
        return new ParsedBaseError(
            String(e.message),
            {
                title: newTitle,
                data: errorData,
            },
        );
    }

    return new ParsedBaseError(
        'Unhandled error',
        {
            title: newTitle,
            data: [e, errorData],
        },
    );
};
