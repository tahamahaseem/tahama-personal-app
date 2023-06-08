import React, {useState} from "react";
import video from "../assets/video1.mp4"

import "./TitleSection.css"
import { Button } from "./Button";
import { PageData } from "./PageData";
import { Link } from 'react-router-dom';

export const TitleSection = () => {

    const [showContent, setContentView] = useState(window.innerWidth > 1000);

    const windowSize = () => {
        if(window.innerWidth < 1000){
            setContentView(false);
        }else{
            setContentView(true);
        }
    }

    window.addEventListener("resize", windowSize);

   

    return (
        <div className="titleSection-container">
            <h1 className="titleSection-hello-text">hi there :)</h1>
            <h1 className="titleSection-sub-text"> MY NAME IS</h1>
            <h1 className="titleSection-name-text">TAHAMA HASEEM</h1>
            {showContent && <div className="titleSection-button-container">
                {PageData.map((item, index) => {
                    return item.path != "/" && <Button text={item.title} path={item.path}></Button>
                })}
            </div>}
        </div>


    )
}