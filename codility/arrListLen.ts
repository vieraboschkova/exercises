function arrListLen(A: Array<number>) {
  let length = 1;
  let index = A[0];
  while (index !== -1) {
    length++;
    index = A[index];
  }

  return length;
}
