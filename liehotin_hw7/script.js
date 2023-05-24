const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(element, string) {
    let result = '';
    for (let i = 0; i < element; i++) {
        result += string[Math.round(Math.random() * (string.length - 1))];
    }
    return result;
}

const key = generateKey(46, characters);
console.log(key);