"use strict";

// 모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home"); // 해당 경로의 디렉토리에 있는 js파일들을 읽어옴

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use : 미들웨어 등록 메소드

module.exports = app;