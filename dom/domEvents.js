//// onclick Event
const btn = document.querySelector('#v2');

btn.onclick = function() {
    alert('OnClicked Mang!');
}


//// *addEventListener (*Best Option)
/// Specify the event type, and a callback
/// to run. (Most Commonly seen)
const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    alert("You clicked h1 Son.");
})


function twist() {
    console.log("Twist");
}
function shout() {
    console.log("Shout");
}

const tasButton = document.querySelector('#tas');

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);


//// Keyboard Events & Event Objects:
document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
})


/// 'keydown'/'keyup keyboard events:
const input = document.querySelector('input');
input.addEventListener('keydown', function() {
    console.log("Key Down!")
})

input.addEventListener('keyup', function(evt) {
    console.log(evt)
})


/// 'keydown' keyboard event:
/// console.log()s the evt .key and .code
window.addEventListener('keydown', function(evt) {
    console.log(evt.key)
    console.log(evt.code)
})