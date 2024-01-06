import React from "react";
import '../CSS/Footer.css';


function Footer() {
    return (
        <div className="footer">
            <div className="domastic-service">
                <h3>DOMASTIC SERVICE</h3>
                <h5>HOME CLEANING</h5>
                <h5>MAID</h5>
                <h5>DEEP CLEANING</h5>
                <h5>GARDENING</h5>
                <h5>PLUMBER</h5>
                <h5> ELECTRICIAN </h5>
                <h5>LAUNDRY SERVICE</h5>
                <h5>CARPENTER</h5>
            </div>
            <div className="vehicle-service"> 
                <h3> VEHICLE SERVICE </h3>
                <h5>VEHICLE CLEANING</h5>
                <h5>MECHANICS</h5>
                <h5>VEHICLE TOWING</h5>
                <h5>PARKING</h5>
            </div>
            <div className="commercial">
            <h3> COMMERCIAL </h3>
                <h5>VEHICLE CLEANING</h5>
                <h5>MECHANICS</h5>
                <h5>VEHICLE TOWING</h5>
                <h5>PARKING</h5>
            </div>
        </div>
    )
}
export default Footer;