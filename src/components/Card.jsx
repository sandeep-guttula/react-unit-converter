import React, { useState } from 'react'
import './units'
import './card.css'
import units from './units'



const Card = () => {
    const [input, setInput] = useState(0)
    const options = ['Centimeter','Inches','Meter','Kilometer']
    const [optionOne, setOptionOne] = useState(options[0])
    const [optionTwo, setOptionTwo] = useState(options[0])
    const onOptionChangeHandlerOne = (event) => {
        setOptionOne(event.target.value)
    }
    const onOptionChangeHandlerTwo = (event) => {
        setOptionTwo(event.target.value)
    }

    return (
        <div className='container'>
            <div className='card'>
                <div className='input-container' >
                    <label for="input">Input</label>
                    <div className='space'>
                        <input type='number' value={input} onChange={e => setInput(e.target.value)} placeholder=' ' />
                    </div>
                    <select id='units'  onChange={onOptionChangeHandlerOne}>
                        {options.map((option, index) => {
                            return <option key={index} >
                                {option}
                            </option>
                        })}
                    </select>
                </div>
                <div className='input-container' >
                    <label for="input">Result</label>
                    <div className='space'>
                        <input type='number' value={units(input, optionOne, optionTwo)} placeholder=' ' />
                    </div>
                    <select id='units' onChange={onOptionChangeHandlerTwo}>
                        {options.map((option, index) => {
                            return <option key={index} >
                                {option}
                            </option>
                        })}
                    </select>
                </div>  
            </div>
        </div>
    )
}

export default Card