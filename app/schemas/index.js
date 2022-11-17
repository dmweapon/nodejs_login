"use strict";

const mongoose = require("mongoose");

module.exports = ()=>{
    const connect = ()=>{
        if(process.env.NODE_ENV !== "production") {
            mongoose.set("debug", true);
        }
        mongoose.connect(
            "mongodb://localhost:27017/til", // til 이라는 db 사용
            {
                dbName: "til"
            },
            error => {
                if (error) {
                    console.log("몽고디비 연결 실패", error);
                } else {
                    console.log("몽고디비 연결 성공");
                }
            }
        )
    };
    connect();
    mongoose.connection.on("error", error => {
        console.log("몽고디비 연결 에러", error);
    });
    mongoose.connection.on("disconnected", ()=>{
        console.log("몽고디비 연결이 끊겨 재연결합니다.");
        connect();
    });
    require("./user"); // user 스키마 사용
    require("./board"); // board 스키마 사용
};