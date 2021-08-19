
/*
Problem Link: https://leetcode.com/problems/add-binary/
Language: Javascript
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let alength = a.length;
    let blength = b.length;

    if(alength < blength) {
        let t = b;
        b = a;
        a = t;
    }

    let areverse = a.split("").reverse().join("");
    let breverse = b.split("").reverse().join("");

    let carry = 0;
    let ans = '';

    for(let i = 0; i < areverse.length; i++) {
        let bb = 0;
        if( i >= breverse.length) bb = 0;
        else bb = parseInt(breverse[i]);
        let aaa = parseInt(areverse[i]);

       // console.log(aaa + " " + bb + " " + carry);

        if(aaa + bb + carry === 3) {
            carry = 1;
            ans+='1';
        }
        else if(aaa + bb + carry === 2) {
            ans+='0';
            carry = 1;
        }
        else if(aaa + bb + carry === 1) {
            ans+='1';
            carry = 0;
        }
        else {
            ans+='0';
            carry = 0;
        }
    }

    if(carry === 1) {
        ans+='1';
    }

    return ans.split("").reverse().join("");
};
