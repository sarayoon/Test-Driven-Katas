const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns string if string length is less than column number', () => {
    expect(wrap('Rhianna and Sara rock!', 30)).to.equal(
      'Rhianna and Sara rock!'
    );
  });
  it('Returns string on separate lines if string length is greater than column number', () => {
    expect(wrap('Rhianna and Sara rock!', 10)).to.equal(
      'Rhianna\nand Sara\nrock!'
    );
  });
  it('Returns string on separate lines if string length is greater than column number', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    );
  });
});
