import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "../Component/Card";
import {homeService} from '../Component/Details'
import '../CSS/Home.css';
import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";



function homeCard(homeService){
    return(
        <React.Fragment>
            <Card 
            imgUrl={homeService.Url}
            title={homeService.Title}
            details={homeService.Detals}
            learnMore={homeService.learnUrl}
             />
        </React.Fragment>
        
    );
}


function Home() {
    return(
        <div className="home">
            
            <div className="home-card">
                {homeService.map(homeCard)}
                </div>
           
        </div>
    )
}
export default Home;