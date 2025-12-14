function addBinary2(a: string, b: string): string {
  const aLength = a.length;
  const bLength = b.length;
  const maxLength = aLength > bLength ? aLength : bLength;

  a = "0".repeat(maxLength - aLength) + a;
  b = "0".repeat(maxLength - bLength) + b;

  let i = maxLength - 1;
  let result = "";
  let memo = "0";
  while (i > -1) {
    if (a[i] === "0" && b[i] === "0") {
      if (memo === "0") {
        result = "0" + result;
      } else {
        result = memo + result;
        memo = "0";
      }
    } else if (a[i] === "0" && b[i] === "1") {
      if (memo === "0") {
        result = "1" + result;
      } else {
        result = "0" + result;
        memo = "1";
      }
    } else if (a[i] === "1" && b[i] === "0") {
      if (memo === "0") {
        result = "1" + result;
      } else {
        result = "0" + result;
        memo = "1";
      }
    } else {
      if (memo === "0") {
        result = "0" + result;
        memo = "1";
      } else {
        result = "1" + result;
        memo = "1";
      }
    }

    i--;
  }

  if (memo === "1") {
    result = "1" + result;
  }

  return result;
}
