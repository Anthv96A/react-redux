import React from 'react';

const Link = ({ active, children, onClick}) => {
    const style = { marginLeft: '4px' };

    return (
        <button onClick={onClick} style={style} disabled={active}>
            {children}
        </button>
    )
};

export default Link;