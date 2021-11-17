import React from "react";

function SignUp() {

  return (
    <div className="LoginBox">
    <div className="ItemBox">
      <div className="FormHeader">
        <p>Sign Up</p>
      </div>
      <form className="InputBox">
        <div className="FormItem">
          <input type="text" name="nickname" placeholder="nickname" className="inputForm "/>
        </div>
        <div className="FormItem">
          <input type="email" name="email" placeholder="email" className="inputForm "/>
        </div>
        <div className="FormItem">
          <input type="password" name="password" placeholder="password" className="inputForm "/>
        </div>
        <div className="FormItem">
          <input type="password" name="password" placeholder="repeat password" className="inputForm "/>
        </div>
        <div className="FormItem">
          <button>Sign Up</button>
        </div>
      </form>
      <div className="Description">
        <p>
          Registered?
          <a href="#"> Sign Up </a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default SignUp;