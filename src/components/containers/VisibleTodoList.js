import { connect } from 'react-redux';
import { toggleTodo, removeTodo, VisibilityFilters } from '../../actions/index';
import TodoList from '../ui/TodoList';


const getVisibleTodos = (todos, filter) => {
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => t.completed === false);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed === true);
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

