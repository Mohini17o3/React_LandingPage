import React from "react" ;

const ButtonTag = (props)=>{
    return(
        <div className="tag">
       <div className="grid">
       <div className="grid-item1">
       <img src = {props.image}></img> {props.text}</div></div>
       
       </div>
    );
}

export default ButtonTag;