const flatArray = [];
function flattenArray(array) {

    // array.forEach(item => {
    //     if (Array.isArray(item)) {
    //         flattenArray(item)
    //     } else {
    //         flatArray.push(item)
    //     }
    // })
    // return flatArray

    return array.reduce((acc, curr)=>{
        if(Array.isArray(curr)){
            acc = [...acc, ...flattenArray(curr)]
        }else {
            acc.push(curr)
        }
        return acc
    }, [])
}

// console.log(flattenArray([1, [2,[3,4,[5],[[[6]]]]]]))
console.log(flattenArray([ 1, [ 2, [ 3, 4, [ 5 ], [ 6 ] ] ] ]))