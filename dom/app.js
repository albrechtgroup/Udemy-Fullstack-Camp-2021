alert('Connected!');
/// DOM elements:

///
console.dir(document);
///

///// MDN Docs - document.getElementById():
// var element = document.getElementById(id);


/// MDN Docs - document.getElementsByTagName():
// var elements = document.getElementsByTagName(name);

/// MDN Docs - document.getElementsByClassName():



//////////////////////////////////////////
/// New, all-in-one method to select a single
/// element:
/// querySelector()

/// Finds first h1 element:
document.querySelector('h1');

/// Finds first element with ID of red:
document.querySelector('#red');

/// Finds first element with class class of:
document.querySelector('.big');

/// Finds an anchor tag with the title java:
document.querySelector('a[title="java"]');


///////////////////////////////////////////
/// querySelectorAll():
/// Same idea, but returns a collection of
/// matching elements. Instead of 1st match.
document.querySelectorAll('p');


/// MDN Docs - document.createElement():
/// var element = document.createElement(tagName[, options]);


//////////////////////////////////////////
/// POKEMON Html display thing:
const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}