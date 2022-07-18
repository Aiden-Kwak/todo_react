import TodoItem from "./TodoItem";

function TodoList({todos}) {
    return (
        <div>
            {todos.map(todo=>(
                <TodoItem todo={todo}/>
            ))}
        </div>
    );
}

export default TodoList;