////////////////////////////////////
//// Callstack
const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) + square(c)
)

////////////////////////////////////
console.log('I print 1st');

setTimeout(() => {
    console.log('I print after 3 seconds');
}, 3000);

console.log('I print 2nd');

/////////////////////////////////////
//// fake request: Callbacks
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


///////////////////////////////////////
//// fake request: Promises
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

/////////////////////////////////////////
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
        console.log("It Worked!!! (Page3)")
    })
    .catch(() => {
        console.log("OH NO, A Request Failed!!!")
    })

////////////////////////////////////////////
///// Make out Own Promise:
const fakeRequest = (url) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1500)
    })
}  

////////////////////////////////////////////
///// ASYNC Functions:
