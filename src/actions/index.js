import { v4 as uuid } from 'uuid';
import * as actions from './redux-actions';

async function saveTodoAsync(text) {
    return await new Promise(resolve => setTimeout(() => resolve(text), 500));
}
export const addTodoAsync = text => {
    return async dispatch => {
       const result = await saveTodoAsync(text);
       dispatch({ type: actions.ADD_TODO, id: uuid(), text: result});
    }
};
export const setVisibilityFilter = filter => ({
    type: actions.SET_VISIBILITY_FILTER,
    filter: filter
});

export const toggleTodo = id => ({
    type: actions.TOGGLE_TODO,
    id: id
});

export const removeTodo = id => {
    return {
        type: actions.REMOVE_TODO,
        id: id
    }
};

export const updateTodo = (id, updateTodo) => {
    return { 
        type: actions.UPDATE_TODO,
        id: id,
        todo: updateTodo
    }
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}