//// onclick Event
const btn = document.querySelector('#v2');

btn.onclick = function() {
    alert('OnClicked Mang!');
}


//// addEventListener *
const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    alert("You clicked h1 Son.");
})


////  Keyboard Events & Event Objects
document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
})

const input = document.querySelector('input');
input.addEventListener('keydown', function() {
    console.log("Key Down!")
})

input.addEventListener('keyup', function(evt) {
    console.log(evt)
})


////
window.addEventListener('keydown', function(evt) {
    console.log(evt.key)
    console.log(evt.code)
})