"use strict";

const mongoose = require("mongoose");

const { Schema } = mongoose; // mongoose에서 Schema를 가져옴

/* MongoDB접속시 사용

const {
    types: { ObjectId }
} = Schema; // Schema에서 types에 있는 ObjectId를 가져옴
const boardSchema = new Schema({
    writer: {
        type: ObjectId,
        required: true, // not null
        ref: "User" // 외래키처럼 사용하는 필드, User스키마에서 ObjectId를 참조...??
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

// User 라는 모델에 userSchema를 담아서 내보냄
module.exports = mongoose.model("Board", boardSchema);

*/