const yearOfBirth = Number(prompt('Please, enter your yaer of birth'))
let city = prompt('Please, enter your city')
const sport = prompt('Please, enter your favourite kind of sport')
let textAboutCity


switch (city.toLowerCase()) {
    case 'kyiv':
        textAboutCity = 'capital of Ukraine'
    break;
    case 'washington':
        textAboutCity = 'capital of USA'
    break;
    case 'london':
        textAboutCity = 'capital of Great Britain'
    break;

    default:
        textAboutCity = city
    break;
}
alert(`You are ${2023 - yearOfBirth} years old
You live in ${textAboutCity}`)