// ()=>{}  == function(){}
"use strict"

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터네 한글, 공백 같은 문자가 포함되면 제대로 인식 안되는 문제 해결
app.use(bodyParser.urlencoded({extened: true}));

app.use("/",home); // use->미들웨어를 등록해주는 메서드

module.exports = app;
