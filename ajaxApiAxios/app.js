/// A.J.A.X. -
/// Asynchronous JavaScript and XML

/// A.P.I. -
/// Application Programming Interface.
/// WEB API's - interface for either a web
/// server or a web browser.

/// Current Bitcoin price request API

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("Current Bitcoin Price:")
//         console.log(`=>`, res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("ERROR!!!", err)
//     })


/// J.S.O.N. - JavaScript Object Notation.
/// Similar to Objects in JS with key: value
/// pairs. Except in JSON, the "key": must 
/// be in double-quotes.

/// JSON.parse(data) - turns the "string"
/// into a JS object.

/// JSON.stringify(value) - goes other way,
/// turns Object into a string to send to API


/// HTTP Verbs:
/// GET(Very Popular), POST, PUT, PATCH  etc...
/// List in the dropdown button in POSTMAN*


/// Using the Fetch API.
/// The newer/easier way of making requests
/// Via JavaScript.

/// '.fetch' returns a promise
fetch("https://swapi.dev/api/people/1/")
.then((res) => {
    console.log("RESOLVED!", res)
    return res.json();
})
.then((data) => {
    console.log(data)
    console.log("=========");
})
.catch((e) => {
    console.log("ERROR!!!", e)
})


/// Refactoring using the 'async' function:
const loadStarWarsPeople = async () => {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
}

loadStarWarsPeople();


/// AXIOS - A librairy for making HTTP 
/// Requests and better than .fetch

const axios = require('axios');

axios.get('https://swapi.dev/api/people/3/')
    .then((res) => {
        console.log("AXIOS Response", res)
    })
    .catch((e) => {
        console.log("ERROR", e)
    })
