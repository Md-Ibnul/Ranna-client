import React, { useContext, useState } from "react";
import loginImage from "../assets/undraw_Login_re_4vu2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../layouts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="my-container mt-10 md:flex content-center gap-10">
      <div className="grow lg:ms-20 md:mt-16 mb-5 ps-4 md:ps-0">
        <form onSubmit={handleLogin}>
          <h2 className="text-4xl font-bold text-red-500 mb-8">Please Login</h2>
          <div className="">
            <p className="text-lg font-medium ms-2 mb-2 mt-4">
              Type Your Email
            </p>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="inline-block input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="">
            <p className="text-lg font-medium ms-2 mb-2 mt-4">
              Type Your Password
            </p>
            <input
              name="password"
              type="password"
              placeholder="Yore Password"
              className="inline-block input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <p className="text-lg text-red-500">{error}</p>
          <input
            className="btn btn-primary mt-5 w-1/2 mx-auto"
            type="submit"
            value="Login"
            required
          />
          <p>
            New at Ranna?{" "}
            <Link to="/register" className="link link-hover">
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="w-2/3">
        <img src={loginImage} alt="" />
      </div>
    </div>
  );
};

export default Login;
