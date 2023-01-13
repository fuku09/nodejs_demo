import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const List = ({ taskState }) => {
    const [show, setShow, tasks, setModal, deleteTask, updateCompleted] = taskState;

    // モーダル作成のために指定のidのタスクを取得
    const findTask = (_id) => {
        setModal(tasks.find(e => e._id === _id));
    };

    return (
        <>
            {tasks.map((task) => 
            <div className="single_task" key={task._id}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => updateCompleted(task._id, task.completed)}
                />
                {/* <FontAwesomeIcon className="check" icon={faCheckCircle} /> */}
                <h5>{task.name}</h5>
                <div className="task_links">

                    {/* 編集リンク */}
                    <button className="edit-link"
                        onClick={() => {
                            setShow(!show);
                            findTask(task._id);
                        }}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                        
                    {/* ゴミ箱リンク */}
                    <button type="button" className="delete-btn"
                        onClick={() => deleteTask(task._id)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
            )}
        </>
    );

}

export {List};