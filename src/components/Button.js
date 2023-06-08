import React, { useState } from "react";
import './Button.css';
import { Link } from "react-router-dom";

import sound from '../assets/select.mp3';

export const Button = (children) => {
    
    const playSound = () => {
        const audio = new Audio(sound);
        audio.volume = 0.05;
        audio.play();
      };

    return (
        <button onMouseEnter={playSound} className="button-main">
            <Link to={children.path} className="button-text">{children.text}</Link>
        </button>
    );
}