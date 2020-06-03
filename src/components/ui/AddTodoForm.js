import React, { useState } from 'react';



const AddTodoForm = ({ onSubmit }) => {
    const [todo, setTodo] = useState('');
    const [error, setError] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        if(todo.trim() === ''){
            setError(true);
            return;
        }
        onSubmit(todo);
        setTodo('');
        setError(false);
    }
    const err = error === true ? <span style={{color: 'red'}}>Todo can't be empty</span> : null
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <button disabled={todo === ''} type="submit">Add Todo</button>    
                <br/>
                {err}
            </form>
        </div>
    )
};

export default AddTodoForm;