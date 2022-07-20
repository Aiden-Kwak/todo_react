import TodoItem from "./TodoItem";
import "../css/TodoList.css";

function TodoList({todos, onCheckToggle}) {
    return (
        <div className="TodoList">
            {todos.map(todo=>(
                <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle}/>
            ))}
        </div>
    );
}

export default TodoList;