const biggerStr = (str1, str2) =>
  str1.length > str2.length
    ? str1 + ":" + str1.length
    : str2 + ":" + str2.length;

console.log(biggerStr("India", "Hindustan"));
