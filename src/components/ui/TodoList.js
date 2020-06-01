import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => {
    const mapTodos = todos.map(t => <Todo key={t.id} {...t} onClick={() => toggleTodo(t.id)}></Todo>)
    return(
        <ul>
            {mapTodos}
        </ul>
    )
};

export default TodoList;