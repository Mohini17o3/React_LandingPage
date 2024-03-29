
import React from "react" ;
const DealsCard = (props)=>{
    return(
     <>

<div className ="grid-deals">

<div className = "grid-item1"> <img src={props.image} alt="image"></img></div>

  <div className = "grid-item2"> 
  
      </div>

<div className = "grid-item3"> 
    <span style={{
      color: "blue",
      backgroundColor: "rgba(198, 189, 189, 0.5)",
      padding: "3px 3px",
      marginBottom: "10px",
      borderRadius: "10px",
      marginRight:'5px'
    }}>{props.discount} </span>
    
    <span style={{
      color: "blue",
      backgroundColor: "rgba(198, 189, 189, 0.5)",
      padding: "3px 3px",
      marginTop: "10px",
      borderRadius: "10px",
    }}>  {props.time} </span>
     
     <br></br> <center> <h4>{props.title}</h4></center>   {props.desc} 
     
     </div>

<div className = "grid-item4">

 <span style={{ fontSize: '20px' , marginLeft:'5px' }} > {props.discount_price}</span>
 
  <span style ={{marginLeft:'10px' }} > {props.actual_price} </span>
  
  <span style ={{color:"red"}}>{props.deal}</span> 
   
   </div>  

  <center><button className="deal_button">View Deal</button></center>      
</div>
</>
    );
    

}

export default DealsCard;
