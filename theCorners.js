function theCorners(array) {
    let newArr = [];
    let sum = 0
    for (let i = 0, j = 0; i < array.length; i++) {
        let temp = []
        // temp.push(array[0][j])
        temp.push(array[i][0])
        // temp.push(array[0][j])
        // temp.push(array[0][j])
        newArr.push(temp)
        
        
    }
    
    console.log(newArr)
}

theCorners([[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]])