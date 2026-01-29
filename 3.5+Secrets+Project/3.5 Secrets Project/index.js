//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var authorised = false;
app.use(bodyParser.urlencoded({extended:true}));


// function checkit(req, res, next) {
//     console.log(req.body);
//     const password = req.body['password'];
//     if ( password === "ILoveProgramming") {
//         authorised = true;

//     }
//     next();
// }

// /* or also 
// password = req.body.password
// if pa..........{
// next();
// }
// else{
// res.status(401).send("wrong password")}; */
// app.use(checkit);



app.get("/" , (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

// app.post("/check", (req, res) => {
//     if(authorised){

    
//     res.sendFile(__dirname + "/public/secret.html");}
//     else{
//         res.send("wrong").status(401);
//         //also send index again if wrong
//         // we can use res.sendFile again or 
//         // res.redirect("/")
//     }
// })

app.post("/check", (req,res) => {
    if(req.body.password === "ILoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.redirect("/")
    }
})

app.listen(port, () => {
    console.log("we are live ");
})