import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style/Calculator.scss'

export interface CalculatorProps {
}

export default function Calculator(prop: CalculatorProps) {
    return (
        <div className='calculatorContainer'>
            <Form className='inuputContainer'>
                <Form.Control type="text" readOnly />
                <Form.Control type="text" readOnly />
            </Form>

            {/* <div className='inputContainer' style={{ display: 'flex', flexDirection: 'column' }}>
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
            </div> */}

            <div className='numberPad'>
                <Button variant="primary">AC</Button>

                <Button variant="light">+/-</Button>{' '}
                <Button variant="light">%</Button>{' '}
                <Button variant="light">/</Button>{' '}

                <Button variant="light">7</Button>{' '}
                <Button variant="light">8</Button>{' '}
                <Button variant="light">9</Button>{' '}
                <Button variant="light">*</Button>{' '}

                <Button variant="light">4</Button>{' '}
                <Button variant="light">5</Button>{' '}
                <Button variant="light">6</Button>{' '}
                <Button variant="light">-</Button>{' '}

                <Button variant="light">1</Button>{' '}
                <Button variant="light">2</Button>{' '}
                <Button variant="light">3</Button>{' '}
                <Button variant="light">+</Button>{' '}

                <Button variant="light" className='grid-item'>0</Button>{' '}
                <Button variant="light">.</Button>{' '}
                <Button variant="light">=</Button>{' '}

            </div>
            {/* {prop.value} */}
        </div>
    );
}
