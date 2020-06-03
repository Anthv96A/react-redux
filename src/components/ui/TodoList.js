import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
    const mapTodos = todos.map(t => 
        <Todo key={t.id} {...t} onClick={() => toggleTodo(t.id)} onRemove={() => removeTodo(t.id)}></Todo>
    )
    return(
        <ul>
            {mapTodos}
        </ul>
    )
};

export default TodoList;