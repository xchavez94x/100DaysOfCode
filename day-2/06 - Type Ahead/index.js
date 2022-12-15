const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.querySelector('.search');
const list = document.querySelector('.suggestions')
let cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(response => {
        cities.push(...response)
    })

function findMatches(word, cities) {
    return cities.filter(function (place) {
        const regex = new RegExp(word, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}

function highlightWord(word, state, whatToChange) {
    const wordRegex = new RegExp(word, 'gi');
    return state[whatToChange].replace(wordRegex, `
            <span class='hl'>
                ${word}
            </span>
        `);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function render(element, view) {
    element.innerHTML = view
}

function displayMatches(e) {
    const word = e.target.value
    const filteredCities = findMatches(word, cities);
    const html = filteredCities.map(state => {
        const cityHighlighted = highlightWord(word, state, 'city')
        const stateHighlighted = highlightWord(word, state, 'state')
        return `
            <li>
                <span>${cityHighlighted}, ${stateHighlighted}</span>
                <span>${numberWithCommas(state.population)}</span>
            </li>
        `
    }).join('')
    render(list, html)
}

input.addEventListener('change', displayMatches)
