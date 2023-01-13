import { useEffect, useState } from 'react';
import './App.css';
import { FormView } from './component/FormView';
import { ListView } from './component/ListView';
import axios from "./axios";
import { ModalView } from './component/ModalView';

function App() {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState([]);
  const [formText, setFormText] = useState("例 : Node.jsの勉強");
  const [modalText, setModalText] = useState("");

  // データベースにアクセスして全てのタスクをセットする
  const showTasks = async () => {
    try {
      // APIを叩く
      const { data: tasks } = await axios.get();

      // タスクを出力
      const allTasks = tasks.map((task) => {
        const { completed, _id, name } = task;
        // ListのHTML要素をTaskの数だけ返す
        return {completed: completed, _id: _id, name: name};     
      });
      setTasks(allTasks);
    } catch(err) {
      console.log(err);
    }
  };

  // タスクを作成し、stateとデータベースを更新
  const createTask = async () => {
    try {
      await axios.post("", { name: formText })
        .then((res) => setTasks(tasks => [...tasks, res.data]));
      setFormText(formText)
    } catch (err) {
      console.log(err);
    }
  };

  // タスクの名前を編集。データベースとStateを更新
  const updateName = async (_id) => {
    try {
      await axios.patch(`/${_id}`, {name: modalText})
      // 一致するIDを調べてinputフォームの内容(text)を基に変更する
      setTasks(tasks.map((task) => (task._id === _id ? {completed: task.completed, _id: task._id, name: modalText} : task)));
      setShow(!show);
    } catch (err) {
        console.log(err);
    }
  }

  const updateCompleted = async (_id, completed) => {
    try {
      await axios.patch(`/${_id}`, {completed: !completed})
      // 一致するIDを調べてinputフォームの内容(text)を基に変更する
      setTasks(tasks.map((task) => (task._id === _id ? {completed: !completed, _id: task._id, name: task.name} : task)));
    } catch (err) {
        console.log(err);
    }
  }

  // 指定のタスクを削除し、stateを更新
  const deleteTask = async (_id) => {
    const newTask = tasks.filter(task => task._id !== _id);
    try {
        await axios.delete(`/${_id}`)
            .then((res) => setTasks(newTask));
    } catch (err) {

    }
};

  useEffect(() => {
    console.log("副作用が実行されました。");
    showTasks();
  },[]);

  return (
    <div className='todo_container'>
      <ModalView props={[show, setShow, setModalText, modal, updateName]}></ModalView>
      <FormView taskState={[createTask, formText, setFormText]}></FormView>
      <ListView taskState={[show, setShow, tasks, setModal, deleteTask, updateCompleted]}></ListView>
    </div>
  );
}

export default App;