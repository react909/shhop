import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='Header'>
            <div className='container'>
                <nav>
                    <div class="nav-wrapper">
                        <Link to='/' class="brand-logo">Магазин одежды</Link>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li>
                                <Link to="/">Главнвйа</Link>
                                </li>
                            <li>
                                <Link to="/Cotegory">Котигориа</Link></li>
                            <li>     
                                <Link to="./cart">Корзина</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Header
