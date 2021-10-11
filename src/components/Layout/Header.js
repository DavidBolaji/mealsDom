import React, {  Fragment } from 'react';
import HeaderCartBtn from './HeaderCartBtn'
import classes from './Header.module.css';

import mealsImage from '../../assets/meals.jpg'

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>MealsDom</h1>
            <HeaderCartBtn onClickHandler={props.onClickHandlerSec} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of Food'/>
        </div>
    </Fragment>
}

export default Header
