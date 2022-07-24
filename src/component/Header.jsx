import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

function Header() {
    return (
    <header>
        <div className='navContainer'>
                <a className='navLink' href='/'><h1 className='title'>N.J. Andersen</h1></a>
            <nav className='navBar'>
                <ul>
                    <li className='navItem'>
                        <a className='navLink' href="/#about">About</a>
                    </li>
                    <li className='navItem'>
                        <a className='navLink' href='/#Contact'>Contact</a>
                    </li>
                    <li className='navItem'>
                        <a className='navLink' href='/#Skills'>Skills</a>
                    </li>
                    <li className='navItem'>
                        <a className='navLink' href='/#Projects'>Projects</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header;