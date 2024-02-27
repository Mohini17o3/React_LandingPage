import React from "react";
import styles from "@/styles/Header.module.scss";
const Header = (props)=> {
    return (
<>
<div className={styles.header}>
   <h1>{props.text}</h1>
   <hr></hr>
<div className={styles.grid}>

<div className="grid-item"><img src="./check.png"></img> Last updated - February 24 ,2024 </div>
  <div className="grid-item"><img src="./info.png"></img> Advertising Disclosure </div>
  <div className="grid-item"> Top Relevant <img src="./angle-small-down.png"></img> </div>
</div>
  <hr></hr>

<div>
<div className={styles.grid2}>

<div class="grid-item">Tools</div>
<div className="grid-item">AWS Builder </div>
<div className="grid-item">Start Build</div>
<div className="grid-item">Build Supplies</div>
<div className="grid-item">Tooling</div>
<div className="grid-item">Blue Hosting</div>

</div>
<div className={styles.grid3}>

<div className="grid-item">Home<img src="./angle-right.png"></img> </div>
<div className="grid-item">Hosting for all<img src="./angle-right.png"></img> </div>
<div className="grid-item">Hosting<img src="./angle-right.png"></img> </div>
<div className="grid-item">Hosting6<img src="./angle-right.png"></img> </div>
<div className="grid-item"> Hosting5</div>

</div>

</div>
</div>
</>


    );
}

export default Header;