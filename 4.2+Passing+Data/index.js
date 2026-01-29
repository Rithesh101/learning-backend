import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});



app.post("/submit", (req, res) => {
  const fnamelength = req.body['fName'].length;
  const lnamelength = req.body['lName'].length;
  const total = fnamelength + lnamelength;
  res.render("index.ejs", {total : total});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
