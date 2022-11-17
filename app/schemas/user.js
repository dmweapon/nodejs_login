"use strict";

const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema({
    email: {
        type: String,
        required: true, // not null
        unique: true, // required + unique => Primary Key (PK)
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
// User 라는 모델에 userSchema를 담아서 내보냄
module.exports = mongoose.model("User", userSchema);

