import React from "react";
import "./SignIn.css";

function SignInScreen() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" name="" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="Submit">Sign In</button>
        
      </form>
    </div>
  );
}

export default SignInScreen;
