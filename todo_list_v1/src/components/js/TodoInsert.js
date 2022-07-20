import { MdAddCircle } from "react-icons/md";
import "../css/TodoInsert.css"
import {useState} from 'react';

function TodoInsert({onInsertToggle, onInsertTodo}) {
    const [value, setValue] = useState("")

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    };
    
    return (
        <div className="popup-container">
            <div className="background" onClick={onInsertToggle}></div> 
                <form onSubmit={onSubmit}>
                    <input placeholder="할일을 적어주세요" value={value} onChange={onChange}></input>
                    <button type="submit">
                        <MdAddCircle/>
                    </button>
                </form>          
        </div>

    );
}

export default TodoInsert;