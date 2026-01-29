import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


app.post('/submit', (req, res) => {
    console.log(req.body);

});

app.listen(port, ()=> {
    console.log('listening');
});