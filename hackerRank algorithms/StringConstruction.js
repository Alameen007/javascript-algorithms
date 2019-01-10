function stringConstruction(s) {
    const stringArr = s.split('')
    let hashTable = {}
    
    
    stringArr.forEach(num => {
        if (!hashTable[num]) hashTable[num] = 1;
      });
 
      const dollarArr = Object.values(hashTable);
      const sum = dollarArr.reduce((sum, x) => sum + x)

      return sum


}

stringConstruction('abcabc')