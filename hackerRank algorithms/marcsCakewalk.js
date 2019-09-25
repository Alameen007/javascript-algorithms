function marcsCakewalk(calorie) {
   calorie = calorie.sort((a, b) => b - a)
   let min = 0

   console.log(calorie)
   for (let i = 0; i < calorie.length; i++) {
       min += Math.pow(2, i) * calorie[i];       
   }

   console.log(min)

}

marcsCakewalk([504, 378, 291, 380, 728, 630, 797, 212, 32, 792, 895, 635, 850, 853, 859, 127, 653, 655, 476, 748])