function iqTest(numbers){
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]%2 !== 0) {
            return (i + 1)
        }
        
    }
  }

  console.log(iqTest([2, 4, 7, 8, 10]))