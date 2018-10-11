function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zero = 0

    for (let i = 0; i < arr.length; i++) {
         if (arr[i] > 0) positive++
         if (arr[i] < 0) negative++
         if (arr[i] === 0) zero++
    }
    positive = positive / arr.length
    negative = negative / arr.length
    zero = zero / arr.length

    console.log(positive)
    console.log(negative)
    console.log(zero)
    
}

plusMinus([-4, 3, -9, 0, 4, 1])