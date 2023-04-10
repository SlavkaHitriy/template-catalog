export const strToEllipsis = (str: string, maxLength: number = 30) => {
   return str.length - 3 >= maxLength ? str.slice(0, maxLength) + "..." : str;
};
