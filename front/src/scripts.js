// /api/v1/tasks　からタスクを読み込む
import axios from "./axios";

// 全てのタスクを読み込む
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
        return allTasks;
    } catch(err) {
        console.log(err);
    }
}

// const showTasks = () => {
//     return new Promise((resolve, reject) => {
//         fetch("http://localhost:5001/api/v1/tasks")
//             .then((res) => res.json())
//             .then((data) => resolve(data));
//     });
// };


export {showTasks};