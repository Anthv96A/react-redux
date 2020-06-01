import { connect } from 'react-redux';
import Link from '../ui/Link';
import { setVisibilityFilter } from '../../actions/index';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);