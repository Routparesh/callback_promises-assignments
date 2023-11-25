function doubleArrElement (arr,callback){
    let arrdouble = [];

    for (let i=0; i<arr.length; i++){
        let arr2 = callback(arr[i]);
        arrdouble.push(arr2)
    }
    return arrdouble;
}

function doubleNum (num){
    console.log(num*2)
}

const inputArr = [1,2,3,4,5,6,7,8,9]

const doubleArrElementResult = doubleArrElement(inputArr, doubleNum)