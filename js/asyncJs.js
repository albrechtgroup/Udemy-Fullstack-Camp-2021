/// Asynchronous JS = Not all functions 
/// happening at the same time. 

/// The Call Stack:
/// How JS "knows" what function is currently
/// being run and what functions are called
/// from Within that function, etc.
/// A 'stack' is L.I.F.O = Last In First Out

/// 'isRightTriangle' calls 'square', square
/// calls the 'multiply' function.. etc.
const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)


/// Callbacks:
/// Browsers come with Web API's*
console.log('I print 1st');
setTimeout(() => {
    console.log('I print after 3 seconds, and turn RED after 7!!!');
    document.body.style.backgroundColor = 'red';
}, 3000);
console.log('I print 2nd, but listed 3rd..');


/// DEMO: fakeRequest using Callbacks:
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your Fake Data from ${url}`)
        }
    }, delay)
}

fakeRequestCallback('books.com',
    function (response) {
        console.log("It Worked!")
        console.log(response)
    }, function (err) {
        console.log("ERROR!!!", err)
    })

/// Callbacks are a frustrating experience so,
/// the Promise is Much better/Newer:
/// 'Promise'- Is an object representing the
/// eventual completion or failure of an 
/// Asynchronous operation.

/// DEMO: fakeRequest using Promises:
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;

        setTimeout(() => {
            if(delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your Fake Data from ${url}`)
            }
        }, delay)
    })
}


///// Magic of Promises: refigure
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("It Worked!!! (Page 1)")
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then(() => {
        console.log("It Worked!!! (Page 2)")
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log("It Worked Again!!! (Page3)")
    })
    .catch(() => {
        console.log("OH NO, A Request Failed!!!")
    })


/// Creating our own Promises:
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.6) {
                resolve("More Fake News here.");
            }
            reject("Request DENIED!*");
        }, 2500)
    })
}  

fakeRequest('/dogs/1')
    .then(() => {
        console.log("Done with Request*!*!")
        console.log("Data is:", data)
    })
    .catch((err) => {
        console.log("OH NOOOO!", err)
    })


/// Async Functions - A new and cleaner syntax
/// for working with async code!
/// The 'Async' keyword: Automatically
/// returns a promise.
const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'assMan33') return '*** Welcome! ***'
    throw 'Invalid Password.'
}

login('booker', 'assMan33')
    .then(msg => {
        console.log("*** Loggin IN! ***")
        console.log(msg)
    }) 
    .catch(err => {
        console.log("!!! LOGIN Error !!!")
        console.log(err)
    })


/// The 'Await' keyword:
/// Await will pause the execution of the 
/// function, waiting for a promise to be 
// resolved.



/// Handling errors in Async functions:

