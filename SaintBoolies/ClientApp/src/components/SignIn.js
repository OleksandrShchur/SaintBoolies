import React from "react";
import { Link } from "react-router-dom";

function SignIn() {

  return (
    <div className="LoginBox">
      <div className="ItemBox">

        <div className="FormHeader">
          <p>Sign In</p>
        </div>

        <form className="InputBox">
          <div>
            <input type="email" name="email" placeholder="Email@yahoo.com" className="FormItem InputForm"/>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" className="FormItem InputForm"/>
          </div>

          <div>
            <button className="FormItem LoginButtom">Sign In</button>
          </div>
        </form>
        <div className="Description">
          <p>Are you not registered? <Link to path="/">Sign Up</Link></p>
        </div>
      </div>
    </div>  
  );
}

export default SignIn;