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
            return `
            {/* 擬似的にタスクを追加する */}
            <div className="single_task">
                <FontAwesomeIcon className="check" icon={faCheckCircle} />
                <h5>${name}</h5>
                <div className="task_links">

                    {/* 編集リンク */}
                    <a href="#" className="edit-link">
                        <FontAwesomeIcon icon={faEdit} />
                    </a>
                        
                    {/* ゴミ箱リンク */}
                    <button type="button" className="delete-btn" >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
            `
            
        });
        return allTasks;
    } catch(err) {
        console.log(err);
    }
};



export {showTasks};