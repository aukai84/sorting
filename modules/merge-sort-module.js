function mergeSort(array) {
    if(array.length <= 1){
        return array;
    }

    let middle = parseInt(Math.floor(array.length/2));
    let leftArray = array.slice(0, middle);
    let rightArray = array.slice(middle, array.length);
    let sortedArray = merge(mergeSort(leftArray), mergeSort(rightArray));
    return sortedArray;
}

function merge(left, right) {
    let result = [];
    while(left.length && right.length){
        if(left[0] > right[0]){
            result.push(right[0]);
            right.shift();
        } else {
            result.push(left[0]);
            left.shift();
        }
    }
    while(right.length){
        result.push(right[0]);
        right.shift();
    }

    while(left.length){
        result.push(left[0]);
        left.shift();
    }
    return result;
}

mergeSort([400,5,7,8,0,123,4554,6,5,3,2]);
module.exports = mergeSort;