function funnyString(string) {
    let reversed = "";
    let stringAsciiKeys = [];
    let reversedAsciiKeys = [];
    let stringResult = [];
    let reversedResult = [];
    
  for(let char of string){
    reversed = char + reversed;
  }
    
for (var i = 0; i < string.length; i ++) {
  stringAsciiKeys.push(string[i].charCodeAt(0));
  reversedAsciiKeys.push(reversed[i].charCodeAt(0));
}


for (let i = 0; i < stringAsciiKeys.length - 1; i++) {
    stringResult.push(Math.abs(stringAsciiKeys[i + 0] - stringAsciiKeys[i + 1]))
    reversedResult.push(Math.abs(reversedAsciiKeys[i + 0] - reversedAsciiKeys[i + 1]))    
}

if (JSON.stringify(stringResult) === JSON.stringify(reversedResult)) {
    return 'Funny'
}
else {
    return 'Not Funny'
}
}

console.log(funnyString('bcxz'))