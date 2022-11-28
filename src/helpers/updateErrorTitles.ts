export const updateErrorTitles = (titles: string[]) => titles
    .filter(Boolean)
    .join('->');
