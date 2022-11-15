"use strict"

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginButton = document.querySelector("button");

loginButton.addEventListener("click", login);

function login() {
    console.log("로그인 버튼을 클릭했습니다.");

    const req = {
        id: id.value,
        password: password.value
    };

    console.log(req);

};