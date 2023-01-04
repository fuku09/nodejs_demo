import './App.css';
import { FormView } from './component/FormView';
import { ListView } from './component/ListView';

function App() {
  return (
    <div className='todo_container'>
      <FormView></FormView>
      <ListView></ListView>
    </div>
  );
}

export default App;
