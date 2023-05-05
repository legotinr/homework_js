const yearOfBirth = prompt('Please, enter your yaer of birth')
let messageAboutAge = `You are ${2023 - yearOfBirth} years old`

if (yearOfBirth === null) {alert('We are sorry that you did not want to enter your year of birth') 
messageAboutAge = ''
}

const city = prompt('Please, enter your city')
let textAboutCity
let messageAboutCity
if (city === null) {alert('We are sorry that you did not want to enter your city')
messageAboutCity = ''
} else {
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
messageAboutCity = `You live in ${textAboutCity}`
}


const sport = prompt('Please, enter your favourite kind of sport')
let idol
let messageAboutSport
if (sport === null) {alert('We are sorry that you did not want to enter your favourite kind of sport')
messageAboutSport = ''
} else {

switch (sport.toLowerCase()) {
    case 'foorball':
        idol = 'Cristiano Ronaldo'
    break;
    case 'basketball':
        idol = 'Michael Jordan'
    break;
    case 'motorsport':
        idol = 'Luise Hamilton'
    break;

    default:
        idol = null
    break;
}
messageAboutSport = (idol === null) ? '' : `Great! Would you be like ${idol}?`
}


alert(`${messageAboutAge}  
${messageAboutCity}
${messageAboutSport}`
)
/*alert(`You are ${2023 - yearOfBirth} years old
You live in ${textAboutCity}
Great! Would you be like ${idol}?`)*/