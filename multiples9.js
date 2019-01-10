function multiples9() {
     const numArr = []
    for (let i = 9; i < 250; i += 9) {
       numArr.push(i)
        
    }

    console.log(numArr.reduce((sum, x) => sum + x))


}

multiples9()