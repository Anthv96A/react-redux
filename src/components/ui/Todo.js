import React from 'react';

export const Todo = ({ onClick, onRemove, completed, text }) => {
    const style = { textDecoration: completed ? 'line-through' : 'none'};
    return (
        <li onClick={onClick} style={style}>
            <div>
                <b>{text}</b>
                <button style={{marginLeft: '20px'}} onClick={onRemove}>Remove from list</button>
            </div>
        </li>
    );
}

export default Todo;