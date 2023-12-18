/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let mapS = new Map();
  let mapT = new Map();

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    mapS.set(s[i], mapS.get(s[i]) + 1 || 1);
    mapT.set(t[i], mapT.get(t[i]) + 1 || 1);
  }

  for (const [key, value] of mapS) {
    if (mapT.get(key) == value) {
    } else {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("a", "ab"));
