import React from "react";
import  { useState } from 'react';
const Card =  (props)=>{
   const [showMore, setShowMore] = useState(false);

   const toggleShowMore = (event) => {
      event.preventDefault();
     setShowMore(!showMore);
   };
    return (
 <>
    <div className = "grid-container">
       <div className = "grid-item1">{props.id} {props.Tag}</div>

       <div className = "grid-item2"> <img src={props.image}></img> <center>{props.title}</center></div>

       <div className = "grid-item3"> <h3>{props.desc_heading} </h3> {props.description}</div>

       <div className="grid-item4">
      <h3>Main Highlights</h3>
      {props.Highlight} <br />
      <a href="#" className="show-more" onClick={toggleShowMore}>
        Show More
      </a>
      {showMore && (
        <div className="additional-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          nisi sit amet sapien euismod iaculis.
        </div>
      )}
    </div>

       <div className = "grid-item5 rate-color">
         {props.Rating}
        </div>

       <div className = "grid-item6">
   
       <button className="primary"> View</button>
       
       </div>
     
      
   </div>

 </>
    );
}

export default Card ; 