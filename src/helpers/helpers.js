export const getCurrentTime = () => new Date().toString();

// https://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
export const filterDupes = a => [...new Set(a)];
