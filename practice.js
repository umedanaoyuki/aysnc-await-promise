//非同期処理　async awaitの使用

// const message = "天気予報情報";
//
// const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m,precipitation';
// const getInformation = () => {
//     return new Promise((resolve, reject) => {
//
//         fetch(url).then(res => res.json())
//             .then(json => {
//                 console.log("非同期処理　成功メッセージ");
//                 return resolve(json);
//             }).catch(error => {
//             console.log("非同期処理　失敗メッセージ");
//             return reject(error);
//         })
//     })
// }
// getInformation().then((data) => {
//     console.log(message+ data);
// });

    const getInfoByAsyncAwait =  async () => {
        const message = "天気予報情報";
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m,precipitation\';';

        const json =  await fetch(url).then(response => {
            console.log("非同期処理成功時のメッセージ");
            return response.json();
        }).catch(error => {
            console.log("非同期処理失敗時のメッセージ");
            return error;
        });

        console.log(message + json);
    }


    getInfoByAsyncAwait();

