const express = require('express');
const bodyParser= require('body-parser');
const cors=require('cors');
const path=require("path");
const app = express();

//Middleware


//set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT= 3000 || process.env.PORT;
 app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
 })
 //server