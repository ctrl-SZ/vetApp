import './css/people.css';
import fred from '../images/fred.jfif';
import jane from '../images/jane.jfif';
import bob from '../images/bob.jfif';

function People(){
    return(
        <div class="people">
            <div class="people_wrapper">
                <div class="people_image"><img src={fred} alt="dogs" /></div>
                    <div class="people_description">
                        <p><strong>Meet Fred</strong></p>
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
            <div>
                <div class="people_image"><img src={jane} alt="dogs" /></div>
                    <div class="people_description">
                    <p><strong>Meet Jane</strong></p>
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
            <div>
                <div class="people_image"><img src={bob} alt="dogs" /></div>
                    <div class="people_description">
                    <p><strong>Meet Bob</strong></p>
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
    )
}
export default People;