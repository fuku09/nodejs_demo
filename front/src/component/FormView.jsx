
const FormView = ({ taskState }) => {
    // formの文
    const [createTask, formText, setFormText] = taskState;

    return (
        <div className="form_container">
            <p>Todoアプリ</p>
            <input
                defaultValue={formText}
                onChange={(e) => setFormText(e.target.value) }
            />
            <button
                onClick={createTask}
            >送信</button>
        </div>
    );
}

export {FormView};