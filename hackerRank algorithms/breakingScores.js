function breakingScores(scores) {
    let mininum = scores[0]
    let maximum = scores[0]
    let min = 0
    let max = 0 
    

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < mininum) {
            mininum = scores[i]
            min++
        } else if (scores[i] > maximum) {
            maximum = scores[i]
            max++
        }      
    }

  return [max, min]
}

breakingScores([ 10, 5, 20, 20, 4, 5, 2, 25, 1 ])