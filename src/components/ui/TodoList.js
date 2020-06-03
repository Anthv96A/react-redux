import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, removeTodo, updateTodo }) => {

    const mapTodos = todos.map(t => 
        <Todo
            key={t.id} 
            {...t} 
            onClick={() => toggleTodo(t.id)} 
            onRemove={() => removeTodo(t.id)} 
            onUpdate={(id, updated) => updateTodo(id, updated)}/>
    )
    return <ul>{mapTodos}</ul>
};

export default TodoList;