function gemstones(arr) {

    let hashTable = {}
    for (let i = 0; i < arr.length; i++) {
        const stringArr = arr[i].split('') 
        stringArr.forEach(string => {
            if (!hashTable[string]) hashTable[string] = 1;
            hashTable[string]++;
          });
    }

    console.log(hashTable)
 }

 gemstones(['abcdde', 'baccd', 'eeabg'])