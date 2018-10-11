function mybubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] > array[j]) {
                let a = array[i];
                let b = array[j];
                array[j] = a;
                array[i] = b;
            }      
        }        
    }
    return array;
}

console.log(mybubbleSort([3, -9, -12, -1, 8]))


function bubbleSort(array) {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            
        }
        
    }
    return array;
}

console.log(bubbleSort([3, -9, -12, -1, 8]))

function anotherBubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                noSwaps = false;
            }         
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(anotherBubbleSort([3, -9, -12, -1, 8]))