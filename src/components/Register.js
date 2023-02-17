function Register(){
    return(
        <div>
            <div>
            <h1>Welcome to the Registration section:</h1>
            <p>This is where you can register your details to enable organizing play dates.</p>
            </div>
            <div>

                <input type="text" placeholder="First Name" />
                <p></p>
                <input type="text" placeholder="Last Name" />
                <p></p>
                <input type="email" placeholder="Email" />
                <p></p>
                <input type="text" placeholder="Mobile Number" />
                <p></p>
                <input type="text" placeholder="Suburb" />
                <p></p>
                <input type="text" placeholder="Post Code" />
                <p></p>
                <input type="text" placeholder="Pet Name" />
                <p></p>
                <input type="text" placeholder="Pet breed" />
                <p></p>
                <input type="number" placeholder="Pet Age" />
                <p></p>
                <input type="submit" value="upload" />
                <input type="photo" placeholder="Photo" />
                <p></p>
                <input type="password" placeholder="Password" />
                <p></p>
                <input type="password" placeholder="Confirm Password" />
                <p></p>
                <input type="submit" value="Register" />
                
            </div>
        </div>

    );
}
export default Register;