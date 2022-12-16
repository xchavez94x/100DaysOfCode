const words = document.querySelector('.words');

function speechRecognitionHandler() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    let recognition = new webkitSpeechRecognition();
    let paragraphElement = document.createElement('p');

    recognition.interimResults = true;
    recognition.lang = 'en-US';
    words.appendChild(paragraphElement);

    recognition.addEventListener('result', (e) => {
        const transcripts = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
        const poopScript = transcripts.replace(/poop|poo|shit|dump/gi, '💩');
        paragraphElement.textContent = poopScript;
        if (e.results[0].isFinal) {
            paragraphElement = document.createElement('p');
            words.appendChild(paragraphElement);
        }
    })
    recognition.addEventListener('end', recognition.start);
    recognition.start();
}

window.addEventListener('load', speechRecognitionHandler);