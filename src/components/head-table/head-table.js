import React from "react";
import './head-table.css';
import '../data-table/data-table.css'

const HeadData= () => {

    return (
        <div className='container head-data-main'>
            <div className='list-head-id'>
                <span className='head-data-text'>№</span>
            </div>
            <div className='list-head-name'>
                <span className='head-data-text'>Persons</span>
            </div>
            <div className='list-head-birthday'>
                <span className='head-data-text'>Birthday</span>  
            </div>
            <div className='list-head-points'>
                <span className='head-data-text'>Accumulated points</span>
            </div>
        </div>
    )
};

export default HeadData;