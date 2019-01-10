function marsExploration(s) {
    const strArr = s.split('')
    const arr = []
    let letters = 0
    

    for (let i = 0; i < strArr.length ; i += 3) {
        const message = strArr.slice(i + 0, i + 3)
        arr.push(message)
    }
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][0] !== 'S') letters++
        if(arr[i][1] !== 'O') letters++
        if(arr[i][2] !== 'S') letters++      
    }
    return letters
}

marsExploration('SOSSOSSOS')