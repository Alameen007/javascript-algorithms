function encryption(p) {
  const pArr = p.split("");
  const rows = Math.floor(Math.sqrt(p.length));
  const columns = Math.ceil(Math.sqrt(p.length));
  let loop = 0;
  let newArr = [];
  let answer = "";

  for (let i = loop; i < columns; i++) {
    newArr.push(pArr.slice(loop, loop + columns));
    loop += columns;
  }

  for (let i = 0; i < columns; i++) {
    newArr.forEach(item => {
      answer += item.slice(i, i + 1);
    });
    if (i < columns) {
      answer += " ";
    }
  }
  console.log(rows);
  console.log(columns);
  console.log(newArr);
  console.log(answer);
  return answer;
}

encryption("chillout");
