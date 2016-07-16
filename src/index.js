export default function stringSlice(str: string, start: ?number, end: ?number): string {
  const arr = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  return arr.slice(start, end).join('');
}