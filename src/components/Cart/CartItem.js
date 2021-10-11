import React, { useContext } from 'react';
import classes from './CartItem.module.css'
import CartContext from './../../store/cart-context';


const CartItem = (props) => {
    const ctx = useContext(CartContext)
    const decrement = (e) => {
        console.log(e.target.id);
      ctx.removeItem({
        key: props.id,
        id: props.id,
        description: props.description,
        price: props.price,
        name: props.name,
        amount : 1
      })
    }

    const increment = (e) => {
      ctx.addItem({
        key: props.id,
        id: props.id,
        description: props.description,
        price: props.price,
        name: props.name,
        amount : 1
      })
    }
   
    return (
        <li className={classes['cart-item']}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.group}>
                    <p>{props.price}</p>
                    <span className={classes.number}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes['btn-group']}>
                <button id={props.name} onClick={decrement}>-</button>
                <button id={props.name} onClick={increment}>+</button>
            </div>
        </li>
    )
}

export default CartItem
