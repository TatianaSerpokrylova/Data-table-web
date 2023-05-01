import React from "react";
import '../data-table/data-table.css'


const AddData = ({num, name, birthday, points}) => {


    return(
        <div className='container  ' >
            <ul className='without-padding' >
                <div  className='one-list'>
                    <div className='list-id'>
                        <li>{num}</li>
                    </div>
                    <div className='list-name' >
                        <li> {name}</li> 
                    </div>
                    <div className='list-birthday'>
                        <li>{birthday}</li>
                    </div>
                    <div className='list-points'>
                        <li>{points} </li>
                    </div>
                </div>
            </ul>  
        </div> 
    )
}

export default AddData