const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handelEnter(e) {
    const element = e.target
    element.classList.add('trigger-enter')
    setTimeout(() => {
        if (element.classList.contains('trigger-enter')) {
            element.classList.add('trigger-enter-active')
            background.classList.add('open')
        }

    }, 100);

    const dropdown = element.querySelector('.dropdown');
    const dropdownCoordinates = dropdown.getBoundingClientRect();
    const navCoordinates = nav.getBoundingClientRect();
    const coordinates = {
        height: dropdownCoordinates.height,
        width: dropdownCoordinates.width,
        top: dropdownCoordinates.top - navCoordinates.top,
        left: dropdownCoordinates.left - navCoordinates.left
    }

    background.style.setProperty('width', `${coordinates.width}px`);
    background.style.setProperty('height', `${coordinates.height}px`);
    background.style.setProperty('transform', `translate(${coordinates.left}px, ${coordinates.top}px)`)

}

function handleLeave(e) {
    const element = e.target
    element.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', handelEnter);
});

triggers.forEach(trigger => {
    trigger.addEventListener('mouseleave', handleLeave);
});