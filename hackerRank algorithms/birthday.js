function birthday(s, d, m) {
    let bdsum = 0

    for (let i = 0; i < s.length; i++) {
        let sum = 0
        for (let j = i; j < i + m; j++) {
            sum += s[j]       
        }
        if (sum === d) {
            bdsum++
        }
    }

    return bdsum
}

birthday([4,3,2,3,5], 5, 2)