import React, { useContext } from 'react';
import classes from './HeaderCartBtn.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartBtn = (props) => {
    const ctx = useContext(CartContext);
    

    return (
        <button className={classes.button} onClick={props.onClickHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
               {ctx.inCart}
            </span>
        </button>
    )
}


export default HeaderCartBtn;