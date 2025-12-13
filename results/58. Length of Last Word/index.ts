function lengthOfLastWord(s: string): number {
  let mark = -1;
  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] === " " && mark === -1) {
      mark = i;
    }

    if (s[i] === " " && mark !== -1) {
      return mark - i;
    }
  }

  return mark + 1;
}
