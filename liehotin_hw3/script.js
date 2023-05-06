const yearOfBirth = Number(prompt('Please, enter your year of birth'));
let messageAboutAge = '';


if (!yearOfBirth) { 
    alert('We are sorry that you did not want to enter your year of birth');
} else if (yearOfBirth > 1900 && yearOfBirth < 2023) {
    messageAboutAge = `You are ${2023 - yearOfBirth} years old`;
} else {
    alert('Incorrect year of birth! Please, enter year from 1900 to 2023')
}

const city = prompt('Please, enter your city');
let textAboutCity;
let messageAboutCity = '';
if (city) {
    switch (city.toLowerCase()) {
        case 'kyiv':
            textAboutCity = 'capital of Ukraine';
        break;
        case 'washington':
            textAboutCity = 'capital of USA';
        break;
        case 'london':
            textAboutCity = 'capital of Great Britain';
        break;
    
        default:
            textAboutCity = city;
        break;
    }
    messageAboutCity = `You live in ${textAboutCity}`;
} else {
    alert('We are sorry that you did not want to enter your city');
}


const sport = prompt('Please, enter your favourite kind of sport');
let idol;
let messageAboutSport = '';
if (sport) {
    switch (sport.toLowerCase()) {
        case 'football':
            idol = 'Cristiano Ronaldo';
        break;
        case 'basketball':
            idol = 'Michael Jordan';
        break;
        case 'motorsport':
            idol = 'Luise Hamilton';
        break;
    
        default:
            idol = null;
        break;
    }
    if (idol != null) messageAboutSport = `Great! Would you be like ${idol}?`;
} else {
alert('We are sorry that you did not want to enter your favourite kind of sport');
}

alert(
`${messageAboutAge}  
${messageAboutCity}
${messageAboutSport}`
);
