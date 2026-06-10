import React, { useState } from "react";

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const handleOperation = (operator) => {
        const a = parseInt(num1);
        const b = parseInt(num2);

        if(isNaN(a) || isNaN(b)) {
            setResult("Vui long nhap so hop le");
            return;
        }

        switch(operator) {
            case '+':
                setResult(a+b);
                break;
            case '-':
                setResult(a-b);
                break;
            case '*':
                setResult(a*b);
                break;
            case "/":
                setResult(b!==0 ? a/b : "Khong the chia cho so 0");
                break;
            default:
                setResult("Phep toan khong hop le");
        }
    }

    return (
        <div>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
            <br/>
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/>
            <p>Result: {result}</p>
            <button onClick={() => handleOperation('+')}>+</button>
            <button onClick={() => handleOperation('-')}>-</button>
            <button onClick={() => handleOperation('*')}>*</button>
            <button onClick={() => handleOperation('/')}>/</button>
        </div>
    )
}

export default Calculator;