import { v4 as uuid } from 'uuid';
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from './redux-actions';

export const addTodo = text => ({
    type: ADD_TODO,
    id: uuid(),
    text: text
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter: filter
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id: id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}