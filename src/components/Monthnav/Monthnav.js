import React from "react";
import "./Monthnav.css";
import "../../App.css";

{/* <span className="month">February</span>
<span className="month">March</span>
<span className="month">April</span>
<span className="month">May</span>
<span className="month">June</span>
<span className="month">July</span>
<span className="month">August</span>
<span className="month">September</span>
<span className="month">October</span>
<span className="month">November</span>
<span className="month">December</span> */}

const Monthnav = () => {
    return (
        <div className="monthContainer">
            <button className="arrow previous">&#8249;</button>
                <span className="month">January</span>
            <button className="arrow next">&#8250;</button>
        </div>
    )
}

export default Monthnav;