import React, { useReducer } from 'react';

const initialState = {
    todo: '',
    isError: false,
    isFormValid: false
}
const actions = {
    TYPING : 'TYPING',
    SUCCESS: 'SUCCESS',
    INVALID: 'INVALID'
}

function reducer(state, { type, value }) {
    switch (type) {
        case actions.TYPING:
           return { ...state, todo: value };
        case actions.SUCCESS:
            return { ...state, isError: false, todo: '' };
        case actions.INVALID:
            return { ...state, isError: true, todo: '' };
        default:
            return state;
    }
}

const AddTodoForm = ({ onSubmit }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const submitHandler = (e) => {
        e.preventDefault();
        if(state.todo.trim().length === 0)
            return dispatch({ type: actions.INVALID });
        
        onSubmit(state.todo);
        dispatch({ type: actions.SUCCESS });
    }
    const err = state.isError === true ? <span style={{color: 'red'}}>Todo can't be empty</span> : null
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={state.todo} onChange={(e) => dispatch({ type: actions.TYPING, value: e.target.value })}/>
                <button disabled={state.todo === ''} type="submit">Add Todo</button>    
                <br/>
                {err}
            </form>
        </div>
    )
};

export default AddTodoForm;