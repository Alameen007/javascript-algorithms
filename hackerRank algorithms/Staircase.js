function staircase(n) {
    var line = Array(n + 1).fill(' ');
    line[n] = '';
    for (let i = n - 1; i >= 0; i--) {
      line[i] = '#';
      console.log(line.join(''));
    }
  }

staircase(6)