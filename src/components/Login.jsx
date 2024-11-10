import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const {signInUser,signInWithGoogle } = useContext(AuthContext);

  const handleLogIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    signInUser(email,password)
    .then(result=>{
      console.log(result.user);
      e.target.reset()
      navigate('/')
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result=>{
      console.log(result.user);
      navigate('/')
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1> 
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form 
          onSubmit={handleLogIn} 
          className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="ml-9 text-xs  mb-4">New to this website? Please
          <Link to='/register' className="ml-2 underline text-rose-600">Register</Link>
          </p>
          <p>
          <button onClick={handleGoogleSignIn} className="btn btn-ghost ml-8 mb-4">Google</button>
          </p>
        </div> 
      </div>
    </div>
  );
};

export default Login;
