import { v4 as uuid } from 'uuid';
import * as actions from './redux-actions';

export const addTodo = text => ({
    type: actions.ADD_TODO,
    id: uuid(),
    text: text
});

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

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}