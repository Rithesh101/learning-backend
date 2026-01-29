import express from "express";
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send("<h1>Hellow meow</h1>");
} );

app.get('/about', (req,res) => {
  res.send("<h1> about me </h1>");
});

app.get('/contact', (req,res) => {
  res.send("<h1> dont try to contact me</h1><p>89605393</p>");
});

app.post('/register', (req, res) => {
  res.sendStatus(201);
});

app.put('/user/rithesh', (req, res) => {
  res.sendStatus(200);
});

app.patch('/user/rithesh', (req, res) => {
  res.sendStatus(200);
});

app.delete('/user/rithesh', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, ()=> {
  console.log("We are live");
});
