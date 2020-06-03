import React from 'react';
import { connect } from 'react-redux';
import { addTodoAsync } from '../../actions/index';
import AddTodoForm from '../ui/AddTodoForm';

const AddTodo = ({ dispatch }) => {
    const onSubmit = todo => dispatch(addTodoAsync(todo));
    return <AddTodoForm onSubmit={onSubmit}/>
};

export default connect()(AddTodo);