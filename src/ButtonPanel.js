import React from 'react';
import Button from './Button';

function ButtonPanel({ onButtonClick }) {
    return (
        <div className="ButtonPanel">
            <NumPad onButtonClick={onButtonClick}/>
            <OperatorPanel onButtonClick={onButtonClick}/>
        </div>
    );
}

function NumPad({ onButtonClick }) {
    return (
        <div className="NumPad">
            <Button value="7" onClick={() => onButtonClick("7")} />
            <Button value="8" onClick={() => onButtonClick("8")} />
            <Button value="9" onClick={() => onButtonClick("9")} />

            <Button value="4" onClick={() => onButtonClick("4")} />
            <Button value="5" onClick={() => onButtonClick("5")} />
            <Button value="6" onClick={() => onButtonClick("6")} />

            <Button value="1" onClick={() => onButtonClick("1")} />
            <Button value="2" onClick={() => onButtonClick("2")} />
            <Button value="3" onClick={() => onButtonClick("3")} />

            <Button value="0" onClick={() => onButtonClick("0")} />
            <Button value="." onClick={() => onButtonClick(".")} />
            <Button value="=" onClick={() => onButtonClick("=")} />
        </div>
    )
}

function OperatorPanel({ onButtonClick }) {
    return (
        <div className="OperatorPanel">
            <Button
                value="←"
                onClick={() => onButtonClick("backspace")}
                onMouseDown={() => onButtonClick("hold-backspace")}
                onMouseUp={() => onButtonClick("release-backspace")}
            />

            <Button value="/" onClick={() => onButtonClick("/")} /> 

            <Button value="*" onClick={() => onButtonClick("*")} /> 

            <Button value="-" onClick={() => onButtonClick("-")} />

            <Button value="+" onClick={() => onButtonClick("+")} />
        </div>
    )
}

export default ButtonPanel;
