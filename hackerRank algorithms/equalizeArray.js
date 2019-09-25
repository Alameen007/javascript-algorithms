function equalizeArray(arr) {
    let hashTable = {}
    
    arr.forEach(num => {
        if (!hashTable[num]) hashTable[num] = 0;
        hashTable[num]++;
      });

      let newArr = Object.values(hashTable);
      let max = Math.max(...newArr);
      console.log(arr.length - max)

}


equalizeArray([1, 2, 3, 1, 2, 3, 3, 3])