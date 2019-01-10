function twoArrayDS(arr) {
    let newArr = []
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let temp = []           
            temp.push(...arr[i].slice(j, j+3))
            temp.push(...[arr[i + 1][j+1]])
            temp.push(...arr[i + 2].slice(j, j+3))
            let sum = temp.reduce((sum, x) => sum + x)
            newArr.push(sum)
        }  
    }
      return Math.max(...newArr)
}

twoArrayDS([ [ 1, 1, 1, 0, 0, 0 ], [ 0, 1, 0, 0, 0, 0 ], [ 1, 1, 1, 0, 0, 0 ],[ 0, 0, 2, 4, 4, 0 ],[ 0, 0, 0, 2, 0, 0 ],[ 0, 0, 1, 2, 4, 0 ] ])