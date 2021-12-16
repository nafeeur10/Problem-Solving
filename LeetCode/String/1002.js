/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {

    let atoz = []
    let unique = new Set()

    for(let i = 0; i < words.length; i++) {
        let singleWord = words[i]
        for(let j = 0; j < singleWord.length; j++) {
            unique.add(singleWord[j])
        }
    }

    let ans = []

    for (let item of unique) {

        let min = 500

        for(let i = 0; i < words.length; i++) {
            let singleWord = words[i]
            let flag = false
            let cnt = 0
            
            for(let j = 0; j < singleWord.length; j++) {
                if(item === singleWord[j])
                {
                    flag = true
                    cnt++
                }
            }

            if(flag)
            min = Math.min(min, cnt)
            else
            min = -1
        }


        if(min > 0)
        {
            for(let m = 0; m < min; m++)
            ans.push(item)
        }
        
    }

    return ans
};
