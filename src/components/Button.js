import React, { useState } from "react";
import './Button.css';
import { Link } from "react-router-dom";

import useSound from "use-sound";
import sound from '../assets/select.mp3';

export const Button = (children) => {
    const [playSound] = useSound(sound,{ volume: 0.2 });

    return (
        <button onMouseEnter={playSound} className="button-main">
            <Link to={children.path} className="button-text">{children.text}</Link>
        </button>
    );
}