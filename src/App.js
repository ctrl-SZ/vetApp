import React, {useState} from "react";
import ImageBox from './components/ImageBox';
import Register from './components/Register';
import Login from './components/Login';
import People from "./components/People";
import Services from "./components/Services";
import Location from "./components/Location";
import Customize from "./components/Customize";
import './components/css/menu.css';
import './components/css/main.css';


function App(){
    const startUpPage = "Home";
    let [active, setActive] = useState(startUpPage);
    return (
    <div class='parent'>
        <div class='title'><h2>Welcome to AZ Vetinarian</h2></div>
{/* Main Menu */}
<div>
            <ul class="menu">
                <button onClick={()=> setActive("Home")} class="menu_items">Home</button>
                <button onClick={()=> setActive("People")} class="menu_items">People</button>
                <button onClick={()=> setActive("Services")}class="menu_items">Services</button>
                <button onClick={()=> setActive("Location")}class="menu_items">Location</button>
            </ul>
        </div>
        <div class="menu_area">
            <div class="customize">
                <button onClick={()=> setActive("Customize")}class='buttons'>customize</button>
            </div>
            <div class="members">
                <button onClick={()=> setActive("Login")} class='buttons'>Login</button>
                <button onClick={()=> setActive("Register")} class='buttons'>Register</button>
            </div>
          

            </div>
{/* Import and Replace main content after button clicks */}
        <div class="main_content">
            {active === "Home" && <ImageBox />}
            {active === "Login" && <Login />}
            {active === "Register" && <Register />}
            {active === "People" && <People />}
            {active === "Services" && <Services />}
            {active === "Location" && <Location />}
            {active === "Customize" && <Customize />}

        </div>

    </div>
    )
};
export default App;