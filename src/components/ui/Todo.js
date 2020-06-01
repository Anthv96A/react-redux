import React from 'react';

export const Todo = ({onClick, completed, text}) => {
    const style = { textDecoration: completed ? 'line-through' : 'none'};
    return (
        <li onClick={onClick} style={style}>
            {text}
        </li>
    );
}

export default Todo;