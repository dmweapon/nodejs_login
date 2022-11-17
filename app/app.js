"use strict";

// 모듈
const express = require("express");
const app = express();
/* MongoDB접속시 사용
const connect = require("./schemas")
connect(); // ./schemas 디렉토리의 index.js 파일 실행
*/

//라우팅
const home = require("./src/routes/home"); // 해당 경로의 디렉토리에 있는 js파일들을 읽어옴

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use : 미들웨어 등록 메소드
app.use(express.static(`${__dirname}/src/public`)); // static은 정적파일의 기본 위치를 설정함. ${__dirname}는 현재위치를 의미.


module.exports = app;