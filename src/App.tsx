import '../src/styles/style.css';
import { CheckCircle, Plus, Trash } from 'phosphor-react';

export function App() {
  function addTask() {
    console.log('Add Task!');
  }
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <h1>Todo List</h1>
        </header>
        <main>
          <form>
            <input type="text" placeholder="Add new task"></input>
            <button type="submit" onClick={addTask}>
              Add <Plus size="32" color="#547BAF"></Plus>
            </button>
          </form>
          <div className="task-count">
            <div>
              <p>Tasks created</p>
              <span>0</span>
            </div>
            <div>
              <p>Tasks completed</p>
              <span>0</span>
            </div>
          </div>
          <div className="task-empty">
            <img src="" alt="" />
            <div>
              <p>You have no tasks registered</p>
              <p>Create tasks</p>
            </div>
          </div>
          <div className="list-task">
            <div className="task">
              <CheckCircle size={32} />
              <p></p>
              <Trash size={32} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
