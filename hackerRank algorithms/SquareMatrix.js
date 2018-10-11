function squareMatrix(arr) {
    let primary = 0
    let secondary = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === j) primary += arr[i][j];
            if (i + j === arr.length - 1) secondary += arr[i][j];
        }   
    }
    return Math.abs(primary - secondary)
}

console.log(squareMatrix([[11,2,4],[4,5,6],[10,8,-12]]))