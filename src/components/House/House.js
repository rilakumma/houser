import React from 'react';

export default function House(props){
    return(
        <div className='houseBox'>
           <div>House</div> 
           <div>Property Name: {props.name}</div>
           <div>Address: {props.address}</div>
           <div>City: {props.city}</div>
           <div>State: {props.state}</div>
           <div>Zip: {props.zip}</div>
           <button className='delete' onClick={()=> props.deleteHouse(props.id)}>Delete</button>
        </div>
    )
}