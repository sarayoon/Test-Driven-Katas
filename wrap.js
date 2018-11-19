// Write a function wrap that takes two arguments: a string, and a column number. The function returns the string, but with line breaks inserted at just the right places to make sure that no line is longer than the column number.

//const wrap = (line, maxLen) => '';
module.exports = wrap;

function wrap(string, num) {
  // ('Rhianna and Sara rock!' , 10)
  let output = [];
  // if (string.length < num) {
  //   return string;
  // }
  for (let i = 0; i < string.length; i++) {
    if (output.length < num) {
      output.pushstring[i];
    }
    let lastSpace = output.lastIndexOf(' ');
  }
  console.log(output.lastIndexOf(' '));
  return output;
}
