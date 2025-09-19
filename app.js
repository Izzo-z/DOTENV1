const express = require("express");
const dotenv = require('dotenv').config();
const app = express();


app.set('views engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.listen(process.env.porta, ()=> {
    console.log(`Servidor ouvindo na porta ${process.env.porta} \nhttp://localhost:${process.env.porta}`)
}
)