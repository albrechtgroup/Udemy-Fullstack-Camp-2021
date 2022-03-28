// var request = require("request");
// request('http://www.reddit.com', function(error, response, body){
//     if(error){
//         console.log("Something Went WRONG!");
//         console.log(error);
//     }   else {
//         if(response.statusCode == 200){
//             //Things Worked
//             console.log(body);
//         }
//     }
// });



// var request = require("request");

// request('https://jsonplaceholder.typicode.com/todos', function(error, response, body){
//     if(!error && response.statusCode == 200){
//         var parsedData = JSON.parse(body);
//         console.log(parsedData);
//     }   
// });


// const axios = require("axios");

// // Make a request for a user with a given ID
// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(function (response) {
//     // handle success
//     console.log("API SON!!! =========");
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

//// *ES6 Version from above API, using request-promise
const rp = require("request-promise");

rp('https://jsonplaceholder.typicode.com/users/1')
  .then((body) => {
        const parsedData = JSON.parse(body);
        console.log(`${parsedData.name} Lives in ${parsedData.address.city}`);
  })
  .catch((err) => {
    console.log('Error', err);
  });
  



