/// Generates a random color for each:
/// Using 256 istead of 255 because we floor
/// the number.
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

/// Events and the keyword 'this':
/// Events - Responding to user events and
/// actions.

/// Using the 'randomColor()' function above
/// to generate backgroundColor for each box.
const buttons = document.querySelectorAll('button');
for(let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
for(let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

/// Using 'this' in the colorize function
/// colorize is used for Both. Not repeated.
function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}


//////////////////////////////////////////
/// Input & Change Events:
const input = document.querySelector('#only');
const h1 = document.querySelector('#change');

// 'change' fires whenever you leave the input
// 'bar' and the value has changed.
input.addEventListener('change', function(e) {
    console.log("Connected Kid.")
})

// 'input' happens whenever the value in the 
// input 'bar' changes.
// More common now.
input.addEventListener('input', function(e) {
    console.log('INPUT event!!!')
    // changes the h1 text to that of input
    // value
    h1.innerText = input.value;
})


/// Event Bubbling:

/// Event Delegation:
