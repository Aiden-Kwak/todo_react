import './App.css';
import {useState} from 'react';
import Template from './components/js/Template'
import TodoList from './components/js/TodoList'
import TodoInsert from './components/js/TodoInsert';
import { MdAddCircle } from "react-icons/md";

let nextId = 5;

function App() {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "할일 1",
      checked: true
    },
    {
      id:2,
      text: "할일 2",
      checked: true
    },
    {
      id:3,
      text: "할일 3",
      checked: true
    },
    {
      id:4,
      text: "할일 4",
      checked: true
    },
  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev=>!prev)
  }

  const onCheckToggle = (id) => {
    setTodos(todos => 
      todos.map(todo => 
        (todo.id === id ? {...todo, checked: !todo.checked} : todo)
      )
    );
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert('할일을 입력해주세요');
    }else{
      const todo = {
        id: nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }

  }

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} onCheckToggle={onCheckToggle} />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle/>
      </div>
      {insertToggle && (<TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo}/>)}
    </Template>
  );
}

export default App;
