function twoStrings(s1, s2) {
 const s1Arr = s1.split('')
 const s2Arr = s2.split('')

 s1Arr.forEach(element => {
     if (s2Arr.includes(element)) {
         return 'YES'
     }
 });

//  return 'NO'
}


console.log(twoStrings('hello','world'))