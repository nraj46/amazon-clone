import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return <nav className ="header">
        {/* LOGO IMAGE ICON */}
        <Link to="/">
        <img alt= "Amazon" className = "header__logo" src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
        <div className= 'header__search'>
         {/*Seacrch Box  */}
        <input type = 'text'className = "header__searchInput" />
        <SearchIcon className = "header__searchIcon"/>
        </div>
        
        <div className = "header__nav">
            <Link  to ="/login" className= "header__link">
            <div className = 'header__option'>
            <span className = 'header__optionLine1'>Hello Nag</span>
            <span className = 'header__optionLine2'>Sign In</span>
            </div>
            </Link>
           
            <Link to ="/" className= "header__link">
            <div className = 'header__option'>
            <span className = 'header__optionLine1'>Returns</span>
            <span className = 'header__optionLine2'>& Ordres</span>
            </div>
            </Link>

            <Link to ="/" className= "header__link">
            <div className = 'header__option'>
            <span className = 'header__optionLine1'>Your</span>
            <span className = 'header__optionLine2'>Prime</span>
            </div>
            </Link>

            <Link to ="/checkout" className= "header__link">
            <div className = 'header__optionBasket'>
            <ShoppingBasketIcon/>
           <span className = 'header__optionLine2 header__basketCount'>0</span>
            </div>
            </Link>

        </div>

        
        

        
    </nav>
}

export default Header
