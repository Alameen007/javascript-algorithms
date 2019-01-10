function findMissingLetter(array){
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),

if (array[0] === array[0].toUpperCase()) {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
}

let index = alphabet.indexOf(array[0])

 for (let i = index; i < index+array.length; i++) {
     if (!array.includes(alphabet[i])) {
         return alphabet[i]
     }   
 }   
}
  


findMissingLetter(['G','I','J','K','L'])