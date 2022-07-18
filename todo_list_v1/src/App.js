import './App.css';
import {useState} from 'react';
import Template from './components/Template'
import TodoList from './components/TodoList'


function App() {
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
  return (
    <Template>
      <TodoList todos={todos}/>
    </Template>
  );
}

export default App;
