import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function Calculator() {
    const [input, setInput] = useState('');
    const [clearTimeoutId, setClearTimeoutId] = useState(null);

    const handleClick = (value) => {
        switch (value) {
            case 'backspace':
                setInput(prev => prev.slice(0, -1));
                break;
            case 'hold-backspace':
                const timeoutId = setTimeout(() => {
                    setInput(''); 
                }, 200);
                setClearTimeoutId(timeoutId);
                break;
            case 'release-backspace':
                if (clearTimeoutId) {
                    clearTimeout(clearTimeoutId); 
                }
                break;
            case '=':
                try {
                    setInput(eval(input).toString());
                } catch (err) {
                    setInput("Error");
                }
                break;
            case '/':
            case '*':
            case '-':
            case '+':
            case '0':
            case '.':
            case '=':
                setInput(prev => prev + value);
                break;
            default:
                setInput(input + value);
        }
    };
    return (
        <div className="Calculator">
            <Display value={input} />
            <ButtonPanel onButtonClick={handleClick} />
        </div>
    );
}

export default Calculator;