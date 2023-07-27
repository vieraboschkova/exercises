function arrListLen(A: number[]) {
  let length = 1;
  let index = A[0];
  while (index !== -1) {
    length++;
    index = A[index];
  }

  return length;
}

// arrListLen([1, 5, 6]);
