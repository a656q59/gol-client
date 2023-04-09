import React from 'react';

function Button({text}) {
    const style={fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '27px',}


    return (
        <div className='btn btn-large px-5 py-2' style={style}>
            {text}
        </div>
    );
}

export default Button;