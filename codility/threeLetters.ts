// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number, B: number): string {
  // Implement your solution here
  if (A === B) {
    return "ab".repeat(A);
  }
  if (A === 0) return "b".repeat(B);
  if (B === 0) return "a".repeat(B);
  // case = B = 1 // A = 1 and 0
  if (B === 1) {
    // let
    // TODO: fiiiix
  }

  let count: { a: number; b: number } = { b: B === 1 ? 0 : B - 2, a: A };
  let arr = [B === 1 ? "b" : "bb"];
  // console.log(count)
  let next = "a";
  if (A < B) {
    count = { a: A === 1 ? 0 : A - 2, b: B };
    arr = [A === 1 ? "a" : "aa"];
    next = "a";
  }

  while (count.a > 0 || count.b > 0) {
    // console.log('********')
    // console.log(next)

    for (let i = 0; i < 4; i++) {
      if (count[next] > 0) {
        if (i % 2 === 0) {
          arr.push(next);
        } else {
          arr.unshift(next);
        }
        count[next]--;
      } else {
        break;
      }
    }
    next = next === "a" ? "b" : "a";
    // console.log(count[next])
  }
  return arr.join("");
}

console.log(solution(1, 5));
