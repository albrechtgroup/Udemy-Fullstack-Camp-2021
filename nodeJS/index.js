/// Node JS: Node is a JS Runtime that 
/// executes code Outside of the browser
/// *To run SERVER-SIDE code*

const figlet = require('figlet');
const colors = require('colors');

figlet('NodeJS SON*', function (err, data) {
    if(err) {
        console.log("Something went terribly wrong...");
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
})