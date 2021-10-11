import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context'
import CartItem from './CartItem';

const Cart = (props) => {

    const ctx = useContext(CartContext)

    const cartItems = ctx.item.map(cart => 
    <CartItem 
    key={cart.id} 
    id={cart.id} 
    name={cart.name} 
    price={cart.price} 
    amount={cart.amount} 
    />)

    return (
        <Modal onHideCartHandler={props.onHideCartHandler}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{ctx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCartHandler}>Close</button>
                <button className={classes.button} >Order</button>
            </div>
        </Modal>
    )
}

export default Cart;
