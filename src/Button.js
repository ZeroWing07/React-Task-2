import React from 'react';

function Button({ value, onClick, onMouseDown, onMouseUp }) {
    return (
        <button className="Button" onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            {value}
        </button>
    );
}

export default Button;
