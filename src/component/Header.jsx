import React from 'react';


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
            {/* Button to display resume */}
                <a href='../files/Nicholas Jordan Andersen.pdf'> 
                    <button className='resumeBtn'>Resume</button>
                </a>
        </div>
        
    </header>
    );
}

export default Header;