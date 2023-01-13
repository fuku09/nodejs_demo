
const ModalView = ({props}) => {
    const [show, setShow, setModalText, modal, updateTask] = props;

    if(show) {
        return (
            <div id="overlay">
                <div id="content">
                    <p id="modal-title">タスクの編集</p>
                    <p>タスクID：{modal._id}</p>
                    <p>名前：{modal.name}</p>
                    <span>変更：</span>
                    <input
                        defaultValue={modal.name}
                        onChange={(e) => setModalText(e.target.value)}
                    />
                    <button
                        onClick={() => updateTask(modal._id)}
                    >編集</button>
                    <p><button onClick={() => setShow(!show)}>close</button></p>
                </div>
            </div>
        );
    }else {
        return null;
    }
    
}

export {ModalView};