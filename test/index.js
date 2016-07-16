import test from 'ava';
import stringSlice from '../';

test('slice simple strings', t => {
  const text = 'Hello, World!';
  t.is(stringSlice(text, 1, 5), text.slice(1, 5));
  t.is(stringSlice(text, 2, -1), text.slice(2, -1));
  t.is(stringSlice(text, 3), text.slice(3));
});

test('slices emoji contained strings ', t => {
  const text = '😀😬😁😂😃😄😅😆😇😉😊';
  t.is(stringSlice(text, 0, 1), '😀');
  t.is(stringSlice(text, 5, 6), '😄');
  t.is(stringSlice(text, 10, 11), '😊');
  t.is(stringSlice(text, 2, 7), '😁😂😃😄😅');
  t.is(stringSlice(text, 0), '😀😬😁😂😃😄😅😆😇😉😊');
});
