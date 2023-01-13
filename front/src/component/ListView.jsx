import { List } from "./List";

const ListView = ({ taskState }) => {
    return (
        <div className="list_container">
            <div className="tasks">
                <List taskState={taskState}></List>
            </div>
        </div>
    );
};

export {ListView};