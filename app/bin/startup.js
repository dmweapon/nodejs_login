"use strict"

const PORT = 3000;
const app = require("../app");

app.listen(PORT, () => {
    console.log("서버 가동");
});

// ======== API =========
// 콜론(:)과 그 다음에 오는 문자를 파라미터로 인식
app.get('/api/football/user/:league', async (req, res) => {
    let {league} = req.params;

    if(league == "epl") {
        let data = [
            {name: "손흥민", city: "epl"},
            {name: "케인", city: "epl"},
            {name: "호날두", city: "epl"}
        ];
        res.send(data);
    } else if(league == "primera") {
        let data = [
            {name: "이강인", city: "primera"},
            {name: "벤제마", city: "primera"},
            {name: "비니시우스", city: "primera"}
        ];
        res.send(data);
    } else {
       res.send('League is not defined');
    }

});