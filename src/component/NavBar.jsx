import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineFontDownload } from 'react-icons/md';
import { Button } from '../Button';
import '../NavBar.css';
import { IconContext } from 'react-icons/lib';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='my-name' onClick={closeMobileMenu}>
                    <MdOutlineFontDownload className='navbar-icon' />
                N. J. ANDERSEN
                </Link>
                <div className='menu' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <a href='/#about' className='nav-links' onClick={closeMobileMenu}>About</a>
                </li>
                 <li className='nav-item'>
                    <a href='/#skills' className='nav-links' onClick={closeMobileMenu}>Skills</a>
                </li>
                <li className='nav-item'>
                    <a href='/#contact' className='nav-links' onClick={closeMobileMenu}>Contact</a>
                </li>
                <li className='nav-item'>
                    <Link to='/#projects' className='nav-links'>Projects</Link>
                </li>
                <li className='nav-btn'>
                    {button ? (
                    <a href='../files/Nicholas Jordan Andersen.pdf' className='btn-link'>
                        <Button buttonStyle='btn--outline'>Resume</Button>
                    </a>
                    ) : (
                    <a href='../files/Nicholas Jordan Andersen.pdf' className='btn-link'>
                        <Button buttonStyle='btn--outline' buttonSize='btn--moblie'>Resume</Button>
                     </a>
                    )}
                </li>
                </ul>
            </div>
        </div>
    </IconContext.Provider>
    </>
  );
}

export default NavBar