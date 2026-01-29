import express from "express";


const app = express();
const port = 3000;





app.get("/", (req,res) => {

    const today = new Date("July 18, 2004 12:00:00");
    const day = today.getDay();
    console.log(day);

    let type = "the weekday";
    let adv = " work it"

    if ( day ===0 || day === 6){
        type  =  " the weekend";
        adv = " have some fun";
    }


    res.render("index.ejs", {dayType : type, 
        advice : adv
    });
});




app.listen(port, () => {
    console.log("we are live");
})