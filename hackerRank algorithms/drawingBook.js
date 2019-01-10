function drawingBook(n,p) {
   const arr = Array.from(new Array(n),(val,index)=>index+1);
   const lastIndex = arr.length - 1
   let flip = 0
   if (p === arr[0] || p === arr[lastIndex]) {
       return 0
   }

    for (let i = 0; i < arr.length - 2; i++) {
        flip++
        let tempArr = [arr[i + 1], arr[i + 2]]
        console.log(tempArr)
        if (tempArr.includes(p)) {
            break
        }
    }
    console.log(flip)
}

drawingBook(6,5)