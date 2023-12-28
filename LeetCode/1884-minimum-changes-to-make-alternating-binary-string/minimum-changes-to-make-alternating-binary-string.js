/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let minStart = 0;
  let minEnd = 0;

  let lengthS = s.length;

  let j = 1;
  for (let i = 0; i < lengthS; i += 2) {
    console.log(s[i] - '0' + s[j] - '0');
    if (s[i] - "0" != i % 2 && i < lengthS) {
      minStart++;
    }
    if (s[j] - "0" != j % 2 && j < lengthS) {
      minStart++;
    }
    j += 2;
  }

  console.log(minStart);

  return Math.min(minStart, lengthS - minStart);
};