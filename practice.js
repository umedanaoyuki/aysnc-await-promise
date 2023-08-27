//非同期処理

const getInformation = () => {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m,precipitation';

    fetch(url).then(res => res.json())
        .then(json => {
            console.log("非同期処理　成功メッセージ");
            return json;
        }).catch(error => {
            console.log("非同期処理　失敗メッセージ");
            return error;
    })

}


/**
 * getInformationを待たずに、console.logが実行されてしまう
 * apiのレスポンスを待たずに次の処理に行ってしまう
 */

const message = "天気予報情報";
const info = getInformation();

console.log(message + info)