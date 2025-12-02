function isValid(s: string): boolean {
  const opening = new Map<string, string>([
    ["(", "("],
    ["{", "{"],
    ["[", "["],
  ]);

  const closing = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let arr: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (opening.has(s[i])) {
      arr.push(s[i]);
      continue;
    }

    if (arr.pop() !== closing[s[i]]) {
      return false;
    }
  }

  return arr.length === 0;
}
