var express = require('express');
var router = express.Router();
const { body, validationResult } = require("express-validator");
const nodemailer = require('nodemailer');
require("dotenv").config();

let transporter = nodemailer.createTransport({
    host: 'stmp.gmail.com',
    port:465,
    secure: true,
    auth: {
        user: "isaacrobert311@gmail.com",
        pass: "rrwu gzsu jtlx axwm"
    }
});

router.get('/', (req, res)=> {
    res.render('pages/index', )
})






module.exports = Router;