function leftRotation(arr, d) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        let newIndex = i + d;   
        if(newIndex > arr.length - 1) newIndex = newIndex - arr.length;
        newArr.push(arr[newIndex])
        
    } 
    return newArr
}

// console.log(leftRotation([1, 2, 3, 4, 5], 4))
//            0  1  2  3  4
// return    [5, 1, 2, 3, 4]


function leftRotationAhmedV(arr, d) {
    const index = d % arr.length
    const firstHalf = arr.slice(0, index)
    const secondHalf = arr.slice(index, arr.length)

    const result = secondHalf.concat(firstHalf)

    console.log(result)

}

leftRotationAhmedV([1, 2, 3, 4, 5], 4)