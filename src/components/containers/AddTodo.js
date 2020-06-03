import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/index';
import AddTodoForm from '../ui/AddTodoForm';

const AddTodo = ({ dispatch }) => {
    const onSubmit = todo => dispatch(addTodo(todo));
    return <AddTodoForm onSubmit={onSubmit}/>
};

export default connect()(AddTodo);