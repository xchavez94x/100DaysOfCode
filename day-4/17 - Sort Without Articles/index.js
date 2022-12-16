const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

const bandsElement = document.querySelector('#bands');

function strip(name) {
    return name.replace(/^(a |the |an )/ig, '').trim();
}

const sortedBandsArray = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

bandsElement.innerHTML = sortedBandsArray.map(el => `<li>${el}</li>`).join('')