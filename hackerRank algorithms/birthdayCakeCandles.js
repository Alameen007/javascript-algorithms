function birthdayCakeCandles(arr) {
    let hashTable = {}
    
    arr.forEach(num => {
        if (!hashTable[num]) hashTable[num] = 0;
        hashTable[num]++;
      });

      arr = Object.values(hashTable);
      let max = Math.max(...arr);

      console.log(max)
}

birthdayCakeCandles([3,2,1,3])