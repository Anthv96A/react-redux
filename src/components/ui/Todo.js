import React, { useState } from 'react';

export const Todo = ({ id, onClick, onRemove, completed, text, onUpdate }) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateTodo, setUpdateTodo] = useState(text);

    const style = { textDecoration: completed ? 'line-through' : 'none'};
    const jsxDisplayOrUpdateItem = isUpdating ? <input type="text" onChange={(e) => setUpdateTodo(e.target.value)} value={updateTodo}/> : <b>{text}</b>;

    const jsxDeleteOrCancelVisible = !isUpdating 
        ? <button style={{marginLeft: '20px'}} onClick={onRemove}>Remove from list</button> :
          <button style={{marginLeft: '20px'}} onClick={() => setIsUpdating(false)}>Cancel</button>;
    
    const updateText = !isUpdating ? 'Update' : 'Submit';
    const onUpdateHandler = (e) => {
        e.preventDefault();
        if(isUpdating)
            onUpdate(id, updateTodo);
        setIsUpdating(!isUpdating); 
    }
    return (
        <li style={style}>
            <div>
                {jsxDisplayOrUpdateItem} 
                <input style={{marginLeft: '20px'}} type="checkBox" checked={completed} onChange={onClick}/>
                {jsxDeleteOrCancelVisible}
                <button style={{marginLeft: '20px'}} onClick={onUpdateHandler}>{updateText}</button>
            </div>
        </li>
    );
}

export default Todo;