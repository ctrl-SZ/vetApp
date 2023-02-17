function Customize(){

    return(
        <div>
            <h1>Click on your pet preference to change the images of this website</h1>
            <div className="radio">
                <label>
                    <input type="radio" value="catPerson" />
                    Cat Person
                </label>
                <label>
                    <input type="radio" value="dogPerson" />
                    Dog Person
                </label>
                <label>
                    <input type="radio" value="dogCatPerson" />
                    Dog & Cat Person
                </label>
            </div>
            <div className="radio">
                
            </div>
            <div className="radio">
                
            </div>

        </div>
    )
};
export default Customize;