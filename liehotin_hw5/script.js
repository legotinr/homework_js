const arrLength = Number(prompt('Enter array length(more or equal 4)'));
if (arrLength && arrLength >= 4) {
    const arr = [];
    for (i = 0; i < arrLength; i++) {
        arr[i] = prompt(`Enter arr[${i}] element`);
        alert(arr);
    }

    arr.sort();
    alert(arr);
    arr.splice(1, 3);
    alert(arr);
} else {
    alert('Incorrect array length. Enter only number more or equal 4');
}
