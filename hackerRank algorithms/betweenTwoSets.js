function getTotalX(a, b) {
   const newArr = a.concat(b)
   const firstElem = newArr[0]
   const lastElem = newArr[newArr.length - 1]
   const total = 0

   for (let i = firstElem; i < lastElem; i++) {
    if (i%newArr[0] === 0 && i%newArr[1] === 0 && i%newArr[2] === 0 && i%newArr[3] === 0 && i%newArr[4] === 0) {
       total++ 
    }      
   }
   return total
}

console.log(getTotalX([ 2, 4 ],[ 16, 32, 96 ]))