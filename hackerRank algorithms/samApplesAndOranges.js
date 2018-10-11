function applesAndOranges(s, t, a, b, apples, oranges) {
    let numbersApples = 0;
    let numbersOranges = 0;
    for (let i = 0; i < apples.length; i++) {
         let appleDistance = a + apples[i]
         if (appleDistance >= s && appleDistance <= t) {
             numbersApples++
         }
    }
    for (let i = 0; i < oranges.length; i++) {
         let orangeDistance = b + oranges[i]
         if (orangeDistance >= s && orangeDistance <= t) {
             numbersOranges++
         }
    }
    console.log(numbersApples)
    console.log(numbersOranges)
}

applesAndOranges(7, 11, 5, 15, [ -2, 2, 1 ], [ 5, -6 ])