//非同期処理

const getInformation = () => {
    return new Promise((resolve, reject) => {

    const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m,precipitation';

    fetch(url).then(res => res.json())
        .then(json => {
            console.log("非同期処理　成功メッセージ");
            return resolve(json);
        }).catch(error => {
            console.log("非同期処理　失敗メッセージ");
            return reject(error);
    })

})
}


/**
 * 先に　非同期処理　成功メッセージ　が出力される
 * 非同期処理が実行されていることがわかる
 */

const message = "天気予報情報";
getInformation().then((data) => {
    console.log(message+ data);
});
