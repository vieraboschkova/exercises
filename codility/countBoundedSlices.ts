// Complexity O(n**2), passes 70%
function countBoundedSlices(K: number, A: number[]): number {
  // Implement your solution here
  let pairs = 0;
  for (let i = 0; i < A.length; i++) {
    let max = A[i];
    let min = A[i];
    pairs++;
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] > max) max = A[j];
      if (A[j] < min) min = A[j];
      if (max - min > K) break;
      pairs++;
    }
  }
  return pairs;
}

countBoundedSlices(4, [1, 6, 5, 7, 9, 0, 5]);
