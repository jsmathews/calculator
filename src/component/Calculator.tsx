import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { evaluate } from 'mathjs';
import '../style/Calculator.scss'

export interface CalculatorProps {
}

export default function Calculator(prop: CalculatorProps) {

    var [expression, setExpression] = useState<string>('');
    var [result, setResult] = useState<string>('');

    var handleClickOnNumPad = (value: string) => {
        setExpression(prevData => {
            return (
                prevData + value
            )
        })
    }

    var handleClickOnEqual = () => {
        try {
            var output = evaluate(expression);
            setResult(output)
        } catch (error) {
            console.log(error)
        }


    }

    var handleClickOnAC = () => {
        setExpression('')
        setResult('')
    }


    return (
        <div className='calculatorContainer'>
            <Form className='inuputContainer'>
                <Form.Control type="text" readOnly value={expression} />
                <Form.Control type="text" readOnly value={result} />
            </Form>

            <div className='numberPad'>
                <Button variant="primary" onClick={handleClickOnAC}>AC</Button>

                <Button variant="light">+/-</Button>
                <Button variant="light">%</Button>
                <Button variant="light" value={'/'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>/</Button>

                <Button variant="light" value={'7'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>7</Button>
                <Button variant="light" value={'8'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>8</Button>
                <Button variant="light" value={'9'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>9</Button>
                <Button variant="light" value={'*'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>*</Button>

                <Button variant="light" value={'4'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>4</Button>
                <Button variant="light" value={'5'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>5</Button>
                <Button variant="light" value={'6'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>6</Button>
                <Button variant="light" value={'-'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>-</Button>

                <Button variant="light" value={'1'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>1</Button>
                <Button variant="light" value={'2'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>2</Button>
                <Button variant="light" value={'3'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>3</Button>
                <Button variant="light" value={'+'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>+</Button>

                <Button variant="light" className='grid-item' value={'0'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>0</Button>
                <Button variant="light" value={'.'} onClick={(event) => { handleClickOnNumPad(event.currentTarget.value) }}>.</Button>
                <Button variant="light" onClick={handleClickOnEqual}>=</Button>

            </div>

        </div>
    );
}
