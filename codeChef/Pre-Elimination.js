function preElimination(scores, n, k) {
    scores = scores.sort(function(a, b){return b-a})
    k = scores[k - 1]
    let counter = 0
    for (let i = 0; i < n; i++) {
         if (scores[i] >= k) {
             counter++
         }    
    }
    console.log(counter)
}

preElimination([3, 3, 3, 3], 4, 1)