import './css/imageBox.css';
import dogs from '../images/dog.PNG';


function ImageBox(){
    
    return(
        <div>
        <div>
            <p><h4>To organise a 'Puppy play date!'</h4> Please login or register</p>
            <p><h4>New Feature:</h4>This site is customizable. Click on customize to see how you can customize this site
            to meet your needs!</p>
        </div>
        <div class="animal_image">
            <div><img src={dogs} alt="dogs"></img></div>
        </div>
        </div>
    )
};
export default ImageBox;