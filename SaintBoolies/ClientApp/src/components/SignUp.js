import React from "react";
import { Link } from "react-router-dom";

function SignUp() {

    return (
      <div className="LoginBox">
        <div className="ItemBox">
  
          <div className="FormHeader">
            <p>Sign Up</p>
          </div>
  
          <form className="InputBox">
            <div>
              <input type="text" name="nickname" placeholder="Nickname" className="FormItem InputForm"/>
            </div>
            <div>
              <input type="email" name="email" placeholder="Email@yahoo.com" className="FormItem InputForm"/>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" className="FormItem InputForm"/>
            </div>
            <div>
              <input type="password" name="password" placeholder="Repeat password" className="FormItem InputForm"/>
            </div>
            
            <div>
              <button className="FormItem LoginButtom">Sign Up</button>
            </div>
          </form>
          <div className="Description">
            <p>Are you registered? <Link to path="/SignIn">Sign In</Link></p>
          </div>
        </div>
      </div>  
    );
  }

export default SignUp;