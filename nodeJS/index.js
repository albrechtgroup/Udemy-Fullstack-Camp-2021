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


/// 'npm install' to download npm packages to 
/// new machine after copy/cloning.
/// *Inside the Root file you are using.