function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!audio ) return
    console.log(key)
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
    
}

function removeTransition(e) {
    // const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    // if(!key ) return
    // key.classList.remove('playing')
    //? we also can remove the class by transitionEnd event e.propertyName
    if(e.propertyName !== 'transform') return 
    e.target.classList.remove('playing') //? this here refers to the element itself 
}

window.addEventListener('keydown', (e) => {
    playAudio(e)
})
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach( key => {
    key.addEventListener('transitionend', removeTransition)
})

// window.addEventListener('keyup', ( e) => {
//     removeTransition(e)
// })