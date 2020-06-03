import React from 'react';

const Link = ({ active, children, onClick}) => {
    const style = { marginLeft: '4px', color: active ? 'red' : 'blue' };

    return (
        <button onClick={onClick} style={style} disabled={active}>
            {children}
        </button>
    )
};

export default Link;