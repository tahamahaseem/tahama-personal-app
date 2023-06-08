
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button.js';
import { PageData } from './PageData.js';

import useSound from "use-sound";
import sound from '../assets/select.mp3';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from "@fortawesome/free-solid-svg-icons";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";
import './NavigationBar.css';

//<img src={displayPicture} className = "tahama-haseem-dp" alt='' />

function NavigationBar() {
    const [sidebar, viewSidebar] = useState(false);
    const [showContent, setContentView] = useState(true);

    const playSound = () => {
        const audio = new Audio(sound);
        audio.volume = 0.05;
        audio.play();
      };


    const handleToggle = () => {
        viewSidebar(!sidebar);
    }

    const resetBar = () => {
        viewSidebar(false);
    }

    const windowSize = () => {
        if (window.innerWidth <= 960) {
            setContentView(false);
        } else {
            setContentView(true);
        }
    }

    window.addEventListener('resize', windowSize);



    return (
        <>
            {<div className={sidebar ? 'nav-overlay active' : 'nav-overlay'}/>}
            <div className='nav-logo-container'>

                {<div onMouseEnter={playSound} onClick={handleToggle}>
                    <FontAwesomeIcon icon={sidebar ? icons.faTimes : icons.faBars} className='nav-logo-top-icons right' />
                </div>}

                <div>
                    <Link onMouseEnter={playSound} to="https://www.linkedin.com/in/tahama-haseem-a5b239192/" target="_blank" className='nav-logo-top-icons'>
                        <FontAwesomeIcon icon={brandIcons.faLinkedin} />
                    </Link>
                    <Link onMouseEnter={playSound} to="https://www.instagram.com/tihamahhaseem/" target="_blank" className='nav-logo-top-icons'>
                        <FontAwesomeIcon icon={brandIcons.faInstagram} />
                    </Link>
                    <Link onMouseEnter={playSound} to="https://github.com/tahamahaseem" target="_blank" className='nav-logo-top-icons'>
                        <FontAwesomeIcon icon={brandIcons.faGithub} />
                    </Link>
                </div>
            </div>


            <nav className='nav-bar'>
                <div  >
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' >
                            {PageData.map((item, index) => {
                                return (
                                    <li key={index} className="nav-menu-item" >
                                        <Link onMouseEnter={playSound} onClick={resetBar} to={item.path} className={item.style}>{item.title}</Link>
                                    </li>)
                            })}
                        </ul>
                    </nav>
                </div>

            </nav>

        </>
    );
} export default NavigationBar;