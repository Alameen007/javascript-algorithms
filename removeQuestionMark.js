function removeQuestionMark(strings) {
    let stringsArr = strings.split(' ');
    let noQuestionMark = [];
    
  
    for (let i = 0; i < stringsArr.length; i++) {
        let wordArr = stringsArr[i].split('')
        let word = ''
        for (let j = 0; j < wordArr.length; j++) {
            if (wordArr[j] === '?') {
                wordArr[j] = ''; 
            }           
        }
        wordArr = wordArr.join('')
        noQuestionMark.push(wordArr)
    }
    return noQuestionMark.join(' ')
}

console.log(removeQuestionMark("Hello i'm question? and ? another question mark? here"))