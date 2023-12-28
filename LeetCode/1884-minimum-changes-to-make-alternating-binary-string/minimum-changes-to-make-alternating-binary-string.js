/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let minStart = 0;
  let minEnd = 0;

  let sFakeWithStart0 = "";
  let sFakeWithStart1 = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      sFakeWithStart0 += "0";
      sFakeWithStart1 += "1";
    } else {
      sFakeWithStart0 += "1";
      sFakeWithStart1 += "0";
    }
  }

  for (let i = 0; i < s.length; i++) {
    if(s[i] !== sFakeWithStart0[i]) {
        minStart++;
    }

    if(s[i] !== sFakeWithStart1[i]) {
        minEnd++;
    }
  }

  return Math.min(minStart, minEnd);
};