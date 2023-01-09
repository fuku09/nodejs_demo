import axios from "../axios";
import { useState } from "react";


const FormView = () => {
    const [text, setText] = useState("例 : Node.jsの勉強")

    const createTask = async () => {
        try {
            await axios.post("", { name: text });
        } catch (err) {

        }
    };

    return (
        <div className="form_container">
            <p>Todoアプリ</p>
            <input
                defaultValue={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={createTask}
            >送信</button>
        </div>
    );
}

export {FormView};