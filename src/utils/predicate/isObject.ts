/**
 * Является ли значение объектом, массивом, функцией или другим объектно подобным
 */
export const isObject = <T extends object>(value: unknown): value is T => {
    const type = typeof value;

    // eslint-disable-next-line no-restricted-syntax
    return value !== null && (type === 'object' || type === 'function');
};
