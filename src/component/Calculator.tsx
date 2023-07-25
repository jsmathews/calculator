import * as React from 'react';
import Button from 'react-bootstrap/Button';
import '../style/Calculator.scss'

export interface CalculatorProps {
}

export default function Calculator(prop: CalculatorProps) {
    return (
        <div className='calculatorContainer'>

            <textarea name="" id="" cols={30} rows={10}></textarea>

            <div className='numberPad'>
                <Button variant="primary">AC</Button>

                <button>+/-</button>
                <button>%</button>
                <button>div</button>

                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>x</button>

                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>


                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>


                <button className='grid-item'>0</button>
                <button>.</button>
                <button>=</button>

            </div>
            {/* {prop.value} */}
        </div>
    );
}
