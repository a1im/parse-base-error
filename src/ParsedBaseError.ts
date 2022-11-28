import { ParsedBaseErrorOptions } from './types';

export class ParsedBaseError extends Error {
    title: string;

    plainMessage: string;

    data: unknown[];

    hideLog: boolean;

    constructor(message: string, {
        title,
        data,
        hideLog,
    }: ParsedBaseErrorOptions = {}) {
        super([
            ...title ? [`${title}:`] : [],
            message,
        ].join(' '));

        this.plainMessage = message;
        this.title = title ?? '';
        this.data = data ?? [];
        this.hideLog = Boolean(hideLog);
    }

    log() {
        if (this.hideLog) {
            return this;
        }
        const logData = this.data.length ? JSON.stringify(this.data) : '';

        console.error(this.message, logData);

        return this;
    }
}
