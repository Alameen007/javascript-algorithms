function mergeSort(arr) {
    if (arr.length < 2) return arr;
    const middleIndex = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, middleIndex);
    const secondHalf = arr.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

function merge(array1, array2) {
    let result = [];
    while (array1.length && array2.length) {
        let minElem;
        if (array1[0] < array2[0]) minElem = array1.shift();
        else minElem = array2.shift();
        result.push(minElem); 
    }

    if (array1.length) result = result.concat(array1);
    else result = result.concat(array2);

    return result;
}


console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 784, 1, 9, 1]))

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, sright);
}

mergeSort([10,24,76,73])