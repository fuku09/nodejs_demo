import { useState } from "react";
import { List } from "./List";
import axios from "../axios";
import { useEffect } from "react";

const ListView = () => {
    const [ tasks, setTasks ] = useState([]);

    // データベースにアクセスして全てのタスクをセットする
    const showTasks = async () => {
        try {
            // APIを叩く
            const { data: tasks } = await axios.get();
            // console.log(tasks);
    
            // タスクを出力
            const allTasks = tasks.map((task) => {
                const { completed, _id, name } = task;
                // ListのHTML要素をTaskの数だけ返す
                return name;     
            });
            setTasks(allTasks);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        console.log("副作用関数が実行されました。");
        showTasks()
    },[])

    // console.log(tasks);
    return (
        <div className="list_container">
            <div className="tasks">
                <List tasks={tasks}></List>
            </div>
        </div>
    );
};

export {ListView};