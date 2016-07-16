import { expect } from 'chai';
import stringSlice from '../src';

describe('stringSlice', () => {
  it('slices strings', () => {
    const text = 'Hello, World!';
    
    expect(stringSlice(text, 1, 5)).to.equal(text.slice(1, 5));
    expect(stringSlice(text, 2, -1)).to.equal(text.slice(2, -1));
    expect(stringSlice(text, 3)).to.equal(text.slice(3));
  });
  
  it('slices emoji contained strings ', () => {
    const text = '😀😬😁😂😃😄😅😆😇😉😊';

    expect(stringSlice(text, 0, 1)).to.equal('😀');
    expect(stringSlice(text, 5, 6)).to.equal('😄');
    expect(stringSlice(text, 10, 11)).to.equal('😊');
    expect(stringSlice(text, 2, 7)).to.equal('😁😂😃😄😅');
    expect(stringSlice(text, 0)).to.equal('😀😬😁😂😃😄😅😆😇😉😊');
  });
});
