const MATCHER = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g;
export function stringSlice(str: string, start: number, end?: number): string {
  const arr = str.match(MATCHER) || [];
  return arr.slice(start, end).join("");
}
