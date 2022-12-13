const inputs = document.querySelectorAll('.controls input');

const handleUpdate = e => {
    const suffix = e.target.dataset.sizing || "";
    const name = e.target.name;
    const value = e.target.value

    document.documentElement.style.setProperty(`--${name}`, `${value}${suffix}`)
}

inputs.forEach(input => {
    input.addEventListener('change', handleUpdate)
})
