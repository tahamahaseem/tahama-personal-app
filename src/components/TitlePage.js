import React from 'react';
import "./TitlePage.css"

export const TitlePage = (children) => {
    return (
        <div className='titlePage-container'>
            <h1 className='titlePage-title'>{children.title}</h1>
            <p className='titlePage-paragraph'>{children.text}</p>
        </div>


    )
}
