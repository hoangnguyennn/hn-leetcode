function rle(str: string): string {
  let result = "";
  let counter = 0;
  let char = "";
  for (let i = 0; i < str.length; i++) {
    if (char === "") {
      char = str[i];
      counter = 1;
      continue;
    }

    if (char === str[i]) {
      counter++;
    } else {
      result += counter + char;
      char = str[i];
      counter = 1;
    }
  }

  result += counter + char;
  return result;
}

function countAndSay(n: number): string {
  if (n === 1) return "1";
  return rle(countAndSay(n - 1));
}
