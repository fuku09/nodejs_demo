const express = require("express");
const app = express();
const PORT = 5001;
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());
app.use("/api/v1/tasks", taskRoute);


const start = async () => {
    try {
        // データベースと接続
        await connectDB(process.env.MONGO_URL);
        // サーバーを起動
        app.listen(PORT, console.log("サーバーが" + PORT + "番で起動しました。"));
    } catch (err){
        console.log(err)
    }
};

console.log(process.env.MONGO_URL)

start();