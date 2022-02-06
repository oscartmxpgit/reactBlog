const accentsMap: AccentsMap = {
  á: 'a',
  é: 'e',
  í: 'i',
  ó: 'o',
  ú: 'u',
  ñ: 'n',
};

export const createIdFromText = (text: string) => {
  return text
    .toLowerCase() // to lowercase
    .replace(/-/g, ' ') // replace - with space
    .replace(/[áéíóúñ]/gi, (match: string) => accentsMap[match]) // remove accents
    .replace(/[\u{1F300}-\u{1F5FF}]/u, '') // remove emojis
    .replace(/[^a-z0-9\s]/gi, '') // remove special characters
    .trim()
    .replace(/\s/g, '-'); // separate by '-'
};

interface AccentsMap {
  [key: string]: string;
}
