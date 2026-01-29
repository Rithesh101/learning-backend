const fs = require("fs");

// fs.writeFile("message.txt", "hello its rithes", (err) => {
//     if(err) throw err;
//     console.log("file has been saved");

// });

fs.readFile("message.txt", 'utf8', (err,data ) =>{
if (err) throw err;
console.log(data);});