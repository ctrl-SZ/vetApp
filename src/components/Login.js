function Login(){
    return(
        <div>
            <div>
            <h1>Please enter your login details to continue:</h1>
            </div>
            <div>

                <input type="text" placeholder="Email Address" />
                <p></p>
                <input type="password" placeholder="Password" />
                <p></p>
                <input type="submit" value="Login" />
                
            </div>
        </div>

    );
}
export default Login;