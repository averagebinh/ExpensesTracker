import React, { useState } from 'react';
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate';
function ExpenseItem({ title: initialTitle, amount, date }) {

    const [title, setTitle] = useState(initialTitle)
 
    const clickHandler = () => {
        setTitle("Updated!")
        console.log(title)
    }
    return(
       <div className="expense-item">
       <ExpenseDate date={date}/>
      
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
       </div>
    )
}

export default ExpenseItem;