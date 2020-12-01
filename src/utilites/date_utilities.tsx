export function parseDate(dateString: string | undefined | null): Date {
  let parsedDate: Date = new Date(0);
  if (dateString) {
    const parts = dateString.split("/");
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    parsedDate = new Date(year, month);
  }
  return parsedDate;
}

export function isDateInRange(toCheck: Date, start: Date, end: Date): boolean {
  const startEnd =
    start.getTime() <= toCheck.getTime() && end.getTime() >= toCheck.getTime();
  const endStart =
    start.getTime() >= toCheck.getTime() && end.getTime() <= toCheck.getTime();
  return startEnd || endStart;
}
