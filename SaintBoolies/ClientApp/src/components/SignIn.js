import React from "react";

function SignIn() {

  return (
    <div className="LoginBox">
    <div className="ItemBox">
      <div className="FormHeader">
        <p>Sign In</p>
      </div>
      <form className="InputBox">
        <div className="FormItem">
          <input type="email" name="email" placeholder="email" className="inputForm "/>
        </div>
        <div className="FormItem">
          <input type="password" name="password" placeholder="password" className="inputForm "/>
        </div>
        <div className="FormItem">
          <button>Sign In</button>
        </div>
      </form>
      <div className="Description">
        <p>
          No account?
          <a href="#"> Sign Up</a>
        </p>
      </div>
    </div>
    </div>  
  );
}

export default SignIn;