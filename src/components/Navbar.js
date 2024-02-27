import React from 'react';

const Navbar = ()=>{
    return (

    <div className = "topnav ">
     <a className="active" href="#categories"> Categories</a>
     <a href = "#Website Builders">Website Builders</a>
     <a href = "#Today's Deals">Today's Deals</a>
     <input type="text" placeholder="Search..." />
     </div>
    )
}
export default Navbar;