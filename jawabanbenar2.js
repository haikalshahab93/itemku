const solution = (s) => {
    let answer = 0;
    const validFormat = /[^a-z ]/;
    const sLen = s.length;
    let size = 1;
    const words = [];
    
  
    try {
      // validation for max parameter length is 1.000
      if (s.length >= 1000) {
        throw new RangeError('The data you requested exceeds the threshold.');
      }
  
      // validation for words alphabetic characters a-z.
      const isValid = !(validFormat.test(s));
      if (!isValid || s != s.toLowerCase()) {
        throw new SyntaxError('the characters is not alphabet character lowercase')
      }
  
      for (let i = 1; i <= (sLen / 2); i++) 
      {
                const splitWord = []
                let x = 0;
                count = 1;
                output = []
        
                // looping for generate substing
                for (let j = 0; j < sLen; j += size) {
                splitWord.push(s.substring(j, Math.min(sLen, j + size)));
                console.log(splitWord);
            }
        
                // looping to compress string
                while (x < splitWord.length) {
                if (splitWord[x] == splitWord[x + 1]) 
                {
                    count++;
                } 
                else 
                {
                    if (count > 1) {
                    output.push(count + splitWord[x]);
                    count = 1;
                    } else {
                    output.push(splitWord[x]);
                    }
                }
                x++;
                }
        
                // save compressed string to words array
                words.push(output.join(''));
        
                size++;
      }
  
      // get shortest compressed string from words
      answer = Math.min(...words.map(({ length }) => length));
      console.log(answer)
    } catch (error) {
      console.log(`${error.message}`)
    }
  }
  
  const ex_1 = 'aabbaccc'
  const ex_2 = 'ababcdcdababcdcd'
  const ex_3 = 'abcabcdede'
  const ex_4 = 'abcabcabcabcdededededede'
  const ex_5 = 'xababcdcdababcdcd'
  const q2_1 = 'xxxxxxxxxxyyy'
  
  solution(ex_1)