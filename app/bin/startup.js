"use strict"

const PORT = 3000;
const app = require("../app");
const uuidAPIKey = require('uuid-apikey');

app.listen(PORT, () => {
    console.log("서버 가동");
});

// ======== API =========
// uuid 및 API 키 생성 샘플코드 (아래 코드는 유저 생성시 create되게 해야함) 
//var sampleCode = uuidAPIKey.create();
//console.log("sampleApiKey === " + sampleCode.apiKey);
//console.log("sampleUuid === " + sampleCode.uuid);
let sampleCode = {
    uuid: '7db3bd45-325b-449d-a942-b1df58062909',
    apiKey: 'FPSVTH8-69DM97C-N51B3QS-B032J2D'
}

// 콜론(:)과 그 다음에 오는 문자를 파라미터로 인식
app.get('/api/football/user/:league/:apiKey', async (req, res) => {
    // api요청 파라미터에서 apiKey, league 파라미터를 각각의 변수로 받음
    let {
        apiKey,
        league
    } = req.params

    if(!uuidAPIKey.isAPIKey(apiKey) || !uuidAPIKey.check(apiKey, sampleCode.uuid)) {
        res.send('API Key is not valid');
    } else {
        if(league === "epl") {
            let data = [
                {name: "손흥민", city: "epl"},
                {name: "케인", city: "epl"},
                {name: "호날두", city: "epl"}
            ];
            res.send(data);
        } else if(league === "primera") {
            let data = [
                {name: "이강인", city: "primera"},
                {name: "벤제마", city: "primera"},
                {name: "비니시우스", city: "primera"}
            ];
            res.send(data);
        } else {
           res.send('League is not defined');
        }
    }
});


