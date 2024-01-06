import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Header.css'

function Header() {
    return (
        <div className="body">
            <div className="header-box">
                <div className="logo-box">
                    <h1> LOGO</h1>
                </div>

                <div className="btn">
                    <button> Anywhere</button> <span className="span-one" />
                    <button> Anytime</button> <span className="span-one" />
                    <input type="search" className="search-box" placeholder="search" />
                    <button onClick='' className="search-btn" >
                        <img src="search.png" />
                    </button>
                </div>


                <div className="end-btn">
                    <a>I'm Cleaner</a>
                    <button> LogIn </button>
                </div>

            </div>
            <div className="type-service">
                <ul>
                    <li>
                        <Link to='/'>
                            <img id='domastic' src="domastic.png" />
                        </Link>
                    </li>
                    <li>
                        <Link to='Vehicle'>
                            <img id="vehicle" src="vehicle.png" />
                        </Link>
                    </li>
                    <li>
                        <Link to='Commercial'>
                            <img id="something" src="something.png" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;