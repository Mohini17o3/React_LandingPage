import React from "react";

const Rating = (props)=>{
    return (
        <>
        
        <h3>{props.rate}</h3>
        <p>{props.remark}</p>
        <p>{props.stars}</p>

        </>
    );
}

export default Rating;