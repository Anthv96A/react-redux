import { combineReducers } from 'redux';
import todosReducer from './todos';
import visibilityFilterReducer from './visiblityFilter';

export default combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
});