function twoSumMySolution(numArr, sum) {
  let pairsArr = [];

    for (let i = 0; i < numArr.length; i++) {
            for (let j = i + 1; j < numArr.length; j++) {
                if( numArr[i] + numArr[j] === sum) {                     
                    pairsArr.push([numArr[j], numArr[i]])
                }              
            }
        
    }
    return pairsArr;
}

twoSumMySolution([1, 6, 4, 5, 3, 3], 7)

function twoSum(numArr, sum) {
    let pairs = [];
    let hashTable = [];

    for (let i = 0; i < numArr.length; i++) {
        const currNum = numArr[i];
        const counterPart = sum - currNum;
        if(hashTable.indexOf(counterPart) !== -1) {
            pairs.push([currNum, counterPart]);
        }
        hashTable.push(currNum);

        
    }
    console.log(hashTable)
    return pairs;
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7))