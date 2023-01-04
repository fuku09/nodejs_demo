import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { showTasks } from '../scripts';

const List = () => {
    const allTasks = showTasks();
    console.log(allTasks);
    return (
        <> 

        </>
    );
};

export {List};