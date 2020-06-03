import React, { useReducer } from 'react';

const initialState = {
    todo: '',
    isError: false
}
const actions = {
    TYPING : 'TYPING',
    SUCCESS: 'SUCCESS',
    INVALID: 'INVALID'
}

function reducer(state, { type, value }) {
    switch (type) {
        case actions.TYPING:
           const isError = state.isError === true ? value.trim().length === 0 : false;
           return { ...state, isError: isError, todo: value };
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
        const todo = removeWhiteSpace(state.todo);
        onSubmit(todo);
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

function removeWhiteSpace(value){
    return value.replace(/\s/g, '');
}

export default AddTodoForm;