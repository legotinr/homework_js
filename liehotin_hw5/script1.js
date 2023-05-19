const arrLength = Number(prompt('Enter array length(more or equal 4)'));
if (arrLength && arrLength >= 4) {
    const arr = [];
    for (i = 0; i < arrLength; i++) {
        arr[i] = prompt(`Enter arr[${i}] element`);
        alert(arr);
    }

arr.sort();
let tempArr = arr.filter(function (element) {
    return Number(element);
})
alert(arr);
alert(tempArr);
function compareNumeric(a, b){
    return a - b;
}
tempArr.sort(compareNumeric);
alert(tempArr);
arr.splice(0, tempArr.length, ...tempArr);
alert(arr);

} else {
    alert('Incorrect array length. Enter only number more or equal 4');
}