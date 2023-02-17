import './css/services.css';
import dogWash from '../images/dogWash.jpg';
import catVax from '../images/catVax.jpg';
import petAid from '../images/petAid.jfif';
function Services(){
    return(
        <div>
        <div className="servicesMain">
        <h1>Services</h1>
            <div className="serviceOne">
                <div className="serviceOneImage"><img src={dogWash} alt="dogs" /></div>
                <div className="serviceOneDescription">
                <p><h3>Dog Wash</h3></p>
                    <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea 
                            commodo consequat. 
                            Duis aute irure dolor in 
                            reprehenderit in voluptate 
                            velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="serviceTwo">
                <div className="serviceTwoDescription">
                <p><h3>Vacinations</h3></p>
                    <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea 
                            commodo consequat. 
                            Duis aute irure dolor in 
                            reprehenderit in voluptate 
                            velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.</p>
                </div>
                <div className="serviceTwoImage"><img src={catVax} alt="dogs" /></div>

            </div>
            <div className="serviceThree">
                <div className="serviceThreeImage"><img src={petAid} alt="dogs" /></div>
                <div className="serviceThreeDescription">
                <p><h3>Pet First Aid</h3></p>
                    <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea 
                            commodo consequat. 
                            Duis aute irure dolor in 
                            reprehenderit in voluptate 
                            velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Services