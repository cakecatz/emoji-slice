const MATCHER = /\w|\W/gu;
export function stringSlice(str: string, start: number, end?: number): string {
  const arr = str.match(MATCHER) || [];
  return arr.slice(start, end).join("");
}
