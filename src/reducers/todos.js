import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, UPDATE_TODO } from '../actions/redux-actions';

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                { id: action.id, text: action.text, completed: false },
            ]
        case TOGGLE_TODO: 
            return state.map(t => t.id === action.id ? {...t, completed: !t.completed }: t);
        case REMOVE_TODO:
            return state.filter(t => t.id !== action.id);
        case UPDATE_TODO:
            const copy = [...state];
            const index = copy.findIndex(todo => todo.id === action.id);
            if(index === -1)
                throw new Error('Unable to update');
            copy[index].text = action.todo;
            return copy;
        default:
            return state;
    }
};

export default todos;