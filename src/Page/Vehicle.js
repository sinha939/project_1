import React from "react";
import Card from "../Component/Card";
import {vehicleService} from "../Component/Details";


function vehicleCard(vehicleService){
    return(
        <React.Fragment>
            <Card 
            imgUrl={vehicleService.Url}
            title={vehicleService.Title}
            details={vehicleService.Detals}
            learnMore={vehicleService.learnUrl}
             />
        </React.Fragment>
        
    );
}

function Vehicle() {

    return (
        <React.Fragment>

            <div className="vehicle">

                <div className="vehicle-Serivce">
                    {vehicleService.map(vehicleCard)}
                </div>

            </div>

        </React.Fragment>
    )
}
export default Vehicle;