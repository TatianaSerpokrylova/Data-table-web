import React from "react";
import './head-table.css';
import '../data-table/data-table.css'

const HeadData= () => {
    // return <h1 className='app-header'>Customers</h1>;

    return (
        <div className='container head-data-main'>
            <div className='list-id'>
                <span className='head-data-text'>№</span>
            </div>
            <div className='list-name'>
                <span className='head-data-text'>Persons</span>
            </div>
            <div className='list-birthday'>
                <span className='head-data-text'>Birthday</span>  
            </div>
            <div className='list-points'>
                <span className='head-data-text'>Accumulated points</span>
            </div>
        </div>
    )
};

export default HeadData;