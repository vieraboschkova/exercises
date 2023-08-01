// Passes 100%
interface Count {
  [key: string]: number;
}
function threeLetters(A: number, B: number): string {
  if (A === B) {
    return "ab".repeat(A);
  }
  if (A === 0) return "b".repeat(B);
  if (B === 0) return "a".repeat(A);

  const count: Count = { b: B, a: A };
  let str = "";
  let next = A > B ? "a" : "b";

  // Loop until both numbers are zeroed
  while (count.a > 0 || count.b > 0) {
    // If there is double letter already, change next
    if (str.endsWith(next.repeat(2))) {
      next = next === "a" ? "b" : "a";
      continue;
    }
    // If there aint no more letters to add, change next
    if (count[next] === 0) {
      next = next === "a" ? "b" : "a";
      // If the count of the nex to add is bigger or equal to the other
      // Add to string  but do not change the next (and change count)
    } else if (count[next] >= count[next === "a" ? "b" : "a"]) {
      str = str.concat(next);
      count[next]--;
      // Add, substract from count and change next
    } else {
      str = str.concat(next);
      count[next]--;
      next = next === "a" ? "b" : "a";
    }
  }
  return str;
}

// console.log(threeLetters(1, 4));
