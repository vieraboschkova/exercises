function parkingBill(E: string, L: string): number {
  // Implement your solution here
  const firstHour = 3;
  const entryFee = 2;
  const everyHourAfterFirst = 4;
  const entrance = E.split(":").map((str) => parseInt(str));
  const exit = L.split(":").map((str) => parseInt(str));
  const [startH, startM] = entrance;
  const [endH, endM] = exit;
  const hours = endH - startH;
  const minutes = endM - startM;
  if (minutes === 0 && hours === 0) return entryFee;
  if (minutes > 0) return entryFee + firstHour + hours * everyHourAfterFirst;
  else return entryFee + firstHour + (hours - 1) * everyHourAfterFirst;
}

parkingBill("10:00", "13:21");
