function reverseWords (string) {
   var wordsArr = string.split(' ');
   var newWordsArr = [];

   wordsArr.forEach(word => {
     var reversedWord = '';
    for (let i = word.length - 1; i >=0; i--) {
        reversedWord += word[i];       
    }
    newWordsArr.push(reversedWord)
 
   });

   return newWordsArr.join(' ')
}

console.log(reverseWords('Alameen Ak'))

// loop throught the word 
// 