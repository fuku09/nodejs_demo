import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const List = ({tasks}) => {
    return (
        <>
            {tasks?.map((task) => 
            <div className="single_task" key={task}>
                <FontAwesomeIcon className="check" icon={faCheckCircle} />
                <h5>{task}</h5>
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
            )}
        </>
    );

}

export {List};