function migratoryBirds(arr) {
    let hashTable = {}
    let result = []
    
    arr.forEach(num => {
        if (!hashTable[num]) hashTable[num] = 0;
        hashTable[num]++;
      });
      
      let values = Object.values(hashTable)
      let max = Math.max(...values);
      
      
      for (let key in hashTable) {
        if (hashTable.hasOwnProperty(key)) {
            if (hashTable[key] === max) {
                result.push(Number(key))
            }
        }
    }
    return Math.min(...result)
}


console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))