const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function() {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

/// Generates a random color for each:
/// Using 256 istead of 255 because we floor
/// the number.
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

