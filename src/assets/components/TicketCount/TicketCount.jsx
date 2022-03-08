import React from 'react'
import { useState } from 'react';
import "./TicketCount.scss";

const TicketCount = () => {
    const [counter,setCounter]=useState(0)

    const handleDecrement=()=>{
        if (counter == 0 ){
            setCounter(0)
        }else {

            setCounter(counter-1)
        }
    }
    const handleIncrement=()=>{
        setCounter(counter+1)
    }



  return (
    <div className="ticket-counter">
        <button className='ticket-counter__buttons ticket-counter__decrease' onClick={handleDecrement}>-</button>
        <p className='ticket-counter__tickets'>{counter}</p>
        <button className='ticket-counter__buttons ticket-counter__increase' onClick={handleIncrement}>+</button>
    
    </div>
  )
}

export default TicketCount