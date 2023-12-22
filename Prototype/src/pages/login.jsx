import React from "react";

export const Login = () => {
  return (
    <div className="Login">
      <div className="text">
        <h1> Login</h1>

        <form id="Login-form" method="POST">
          <label htmlFor="Username">User Name</label>
          <input name="Username" placeholder="Enter username..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="password">Password</label>
          <input name="password" placeholder="Enter password..." type="password" />
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}