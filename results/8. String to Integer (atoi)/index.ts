function myAtoi(s: string): number {
  s = s.trim();

  let resultStr = "";

  let i = 0;
  while (i < s.length) {
    if (s[i] >= "0" && s[i] <= "9") {
      resultStr += s[i];
    } else if (s[i] === "-" && i === 0) {
      resultStr += s[i];
    } else if (s[i] === "+" && i === 0) {
      // do nothing
    } else {
      break;
    }

    i++;
  }

  // invalid char
  if (resultStr === "-") resultStr = "0";
  let resultNum = Number(resultStr);
  if (resultNum > 2147483647) resultNum = 2147483647; // 2^31 - 1
  if (resultNum < -2147483648) resultNum = -2147483648; // -2^31

  return resultNum;
}
