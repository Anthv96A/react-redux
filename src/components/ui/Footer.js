import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../../actions/index.js';

const Footer = () => {
    return (
        <div>
            <span>Show: </span>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        </div>
    )
};

export default Footer