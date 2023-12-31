import React, { createContext, useContext, useState } from "react";
import sign from "../assets/undraw_sign_up_n6im.svg";
import { FaGithub, FaGithubAlt, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  const [user, setUser] = useState(null);
  console.log(user);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const gitProvider = new GithubAuthProvider();
  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        navigate("/");
        updateUserData(createdUser, photo, name);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUserData = (user, photo, name) => {
    updateProfile(user, {
      photoURL: photo,
      displayName: name,
    })
      .then(() => {
        console.log("update profile");
      })
      .catch((error) => setError(error));
  };

  return (
    <div className="my-container mt-10 md:flex content-center gap-10 bg-slate-100">
      <div className="grow lg:ms-20 md:mt-16 pt-8 md:pt-0 mb-5 ps-4 md:ps-0">
        <form onSubmit={handleRegister}>
          <h2 className="text-4xl font-bold text-red-500 mb-8">
            Please Register
          </h2>
          <div className="">
            <p className="text-lg font-medium ms-2 mb-2 mt-4">Type Your name</p>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="inline-block input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="">
            <p className="text-lg font-medium ms-2 mb-2 mt-4">
              Enter Your Photo URL
            </p>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="inline-block input input-bordered w-full max-w-xs"
              required
            />
          </div>
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
          <p className="text-red-500 text-lg mt-2">{error}</p>
          <input
            className="btn btn-primary mt-5 w-1/2 mx-auto"
            type="submit"
            value="Register"
            required
          />
          <p>
            Already Have an Account?{" "}
            <Link to="/login" className="link link-hover">
              Login
            </Link>
          </p>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-primary mt-5 w-1/2"
        >
          <FaGoogle className="me-2" /> Login with Google
        </button>{" "}
        <br />
        <button
          onClick={handleGithubSignIn}
          className="btn btn-outline mt-4 w-1/2"
        >
          {" "}
          <FaGithub className="me-2" /> Login with Github
        </button>
      </div>
      <div className="md:mt-40">
        <img src={sign} alt="" />
      </div>
    </div>
  );
};

export default Register;
