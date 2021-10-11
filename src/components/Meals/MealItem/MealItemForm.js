import React, { useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [amount,  setAmount] = useState(1)

    const changeHandler = (e) => {
        setAmount(e.target.value);
    }
    
    return (
        <form className={classes.form}>
            <Input
            label="Amount"
            input={{
                id: 'amount_' + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                value: amount,
                onChange: changeHandler
            }}
             />
            <button onClick={(e) => {
                e.preventDefault();
                props.onClick(amount)
                }}>+ Add</button>
        </form>
    )
}

export default MealItemForm;



