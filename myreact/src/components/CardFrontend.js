import React from 'react';
import './CardFrontend.css';

function CardFrontend({cardnumber, name, month, year}){

    return(
        <div className='cardcontainer'>
            <div className='contents'>
                <div className='circles'>
                    <div className='left'></div>
                    <div className='right'></div>
                </div>
                <h1>{cardnumber}</h1>
                <p className='namearea'>{name}</p>
                <div className='datearea'>
                    <p className='datemonth'>{month}</p>
                    <p>/</p>
                    <p className='dateyear'>{year}</p>
                </div>
            </div>
        </div>
        
    )
}
export default CardFrontend;