// .......NOW I WILL CHANGE THE views DIRECTORY NAME TO templates...AND INSIDE tempaltes WE WILL CREATE
// views and partial directory...
//  BY DOING IT WILL SAVE US FORM WRITTING
// THE SAME CODE AGAIN AND AGAIN.......THIS WILL MAKE OUR CODE SMALLER AND SLOWER.....BECAUSE WE WILL USE PARTIAL

const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

// REACH public DIRECTORY PATH.......
const static_path = path.join(__dirname, "../public");
const tempalte_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


// GIVE STATIC FILE index.html PRESENT IN public DIRECTORY

app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', tempalte_path);
hbs.registerPartials(partials_path);

app.get("", (req,res) => {
    res.render("index");
}) 

app.get("/about", (req,res) =>{
    res.render("about");
})

app.get("/weather", (req,res) =>{
    res.render("weather");
})

app.get("*", (req,res) =>{
    res.render("404eror");
})



app.listen(port, () => {
    console.log(`Listening to ${port}`);
})

