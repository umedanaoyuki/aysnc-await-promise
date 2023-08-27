//同期処理を行う関数
const syncronousFunc = () => {
    console.log("これは同期処理関数内のログです");
    return "完了";
}

//最初に実行される
const message = "同期処理";
//次に実行される
const result = syncronousFunc();

//最後に実行される
console.log(message + result);