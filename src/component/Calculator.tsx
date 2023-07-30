import { useState, useEffect, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { evaluate } from 'mathjs';
import '../style/Calculator.scss'

export default function Calculator() {

    var [expression, setExpression] = useState<string>('');
    var [result, setResult] = useState<string>('0');

    const expressionRef = useRef<string>('');
    const enterButton = useRef<HTMLButtonElement>(null);

    const detectKeydown = (event: KeyboardEvent) => {
        const regex = /^[0-9+\-*/.%]*$/;
        console.log(event.key)
        if (regex.test(event.key)) {
            handleClickOnNumPad(event.key);
        } else if (event.key === 'Backspace') {
            handleClickOnBackSpace()
        }
        else if (event.key === 'Enter') {
            enterButton.current?.focus()
            handleClickOnEqual();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', detectKeydown, true);
        return () => {
            // Clean up the event listener when the component unmounts
            document.removeEventListener('keydown', detectKeydown, true);
        };
    }, []);

    var handleClickOnNumPad = (value: string) => {

        expressionRef.current += value;

        // RegExp to avoid repeated operator eg: 12++, 12--
        const replacedString = expressionRef.current.replace(/([+-\/*])\1+/g, '$1');
        // RegExp to replace the operators * and / 
        const replacedString2 = replacedString.replace(/\/(?=\*)|\*(?=\/)/g, '');
        expressionRef.current = replacedString2

        setExpression(expressionRef.current)
    }

    var handleClickOnEqual = () => {
        try {
            if (!expression) {
                expression = '0'
            }
            var output = evaluate(expression);
            setResult(output.toString());
        } catch (error) {
            setResult('Error');
        }
    };

    var handleClickOnBackSpace = () => {
        expressionRef.current = expressionRef.current.slice(0, -1);
        setExpression(expressionRef.current)
    }

    var handleClickOnAC = () => {
        setExpression('')
        setResult('0')
        expressionRef.current = ''
    }

    return (
        <div className='calculatorContainer'>

            <Form className='inuputContainer'>
                <Form.Control className='expression' type="text" value={expression} readOnly />
                <Form.Control className='answer' type="text" value={result} readOnly />
            </Form>

            <div className='numberPad'>
                <Button variant="primary" onClick={handleClickOnAC}>AC</Button>
                <Button variant="light" onClick={handleClickOnBackSpace}>
                    <i className="bi bi-backspace" style={{ fontSize: '1.4rem' }}></i>
                </Button>
                <Button className='operator' variant="light" onClick={() => { handleClickOnNumPad('%') }}>%</Button>
                <Button className='operator' variant="light" onClick={() => { handleClickOnNumPad('/') }}>÷</Button>

                <Button className='numbers' variant="light" onClick={() => { handleClickOnNumPad('7') }}>7</Button>
                <Button className='numbers' variant="light" onClick={() => { handleClickOnNumPad('8') }}>8</Button>
                <Button className='numbers' variant="light" onClick={() => { handleClickOnNumPad('9') }}>9</Button>
                <Button className='operator' variant="light" onClick={() => { handleClickOnNumPad('*') }}>x</Button>

                <Button className='numbers' variant="light" onClick={() => { handleClickOnNumPad('4') }}>4</Button>
                <Button className='numbers' variant="light" onClick={() => { handleClickOnNumPad('5') }}>5</Button>
                <Button className='numbers' variant="light" onClick={() => { handleClickOnNumPad('6') }}>6</Button>
                <Button className='operator' variant="light" onClick={() => { handleClickOnNumPad('-') }}>-</Button>

                <Button className='numbers' variant="light" onClick={() => { handleClickOnNumPad('1') }}>1</Button>
                <Button className='numbers' variant="light" onClick={() => { handleClickOnNumPad('2') }}>2</Button>
                <Button className='numbers' variant="light" onClick={() => { handleClickOnNumPad('3') }}>3</Button>
                <Button className='operator' variant="light" onClick={() => { handleClickOnNumPad('+') }}>+</Button>

                <Button className='numbers grid-item' variant="light" onClick={() => { handleClickOnNumPad('0') }}>0</Button>
                <Button className='operator' variant="light" onClick={() => { handleClickOnNumPad('.') }}>.</Button>
                <Button className='operator' variant="light" onClick={handleClickOnEqual} ref={enterButton} >=</Button>

            </div>

        </div>
    );
}
