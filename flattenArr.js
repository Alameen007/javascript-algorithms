function flatten(array) {
    const flattenArr = []

    array.forEach(arr => {
        flattenArr.push(...arr)
    });

    console.log(flattenArr)
}

flatten([[1,2,3,4],[5,6,7,8],[9,10,11,12]])