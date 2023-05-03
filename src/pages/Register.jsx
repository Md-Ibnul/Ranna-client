import React, { createContext, useContext } from 'react';
import sign from '../assets/undraw_sign_up_n6im.svg'
import { FaFacebookF, FaGithub, FaGithubAlt, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../layouts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {console.log(error);})
    };

    const gitProvider = new GithubAuthProvider()
    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {console.log(error);})
    };

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => {console.log(error);})
    }

    return (
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-10 md:flex content-center gap-10 bg-slate-100'>
            <div className='grow lg:ms-20 md:mt-16 mb-5'>
                <form onSubmit={handleRegister}>
                    <h2 className='text-4xl font-bold text-red-500 mb-8'>Please Register</h2>
                <div className=''>
                    <p className='text-lg font-medium ms-2 mb-2 mt-4'>Type Your name</p>
                <input name='name' type="text" placeholder="Your Name" className="inline-block input input-bordered w-full max-w-xs" required/>
                </div>
                <div className=''>
                <p className='text-lg font-medium ms-2 mb-2 mt-4'>Enter Your Photo URL</p>
                <input name='photo' type="text" placeholder="Photo URL" className="inline-block input input-bordered w-full max-w-xs" required/>
                </div>
                <div className=''>
                <p className='text-lg font-medium ms-2 mb-2 mt-4'>Type Your Email</p>
                <input name='email' type="email" placeholder="Your Email" className="inline-block input input-bordered w-full max-w-xs" required/>
                </div>
                <div className=''>
                <p className='text-lg font-medium ms-2 mb-2 mt-4'>Type Your Password</p>
                <input name='password' type="password" placeholder="Yore Password" className="inline-block input input-bordered w-full max-w-xs" required/>
                </div>
                <input className='btn btn-primary mt-5 w-1/2 mx-auto' type="submit" value="Register" required/>
                <p>Already Have an Account? <Link to='/login' className="link link-hover">Login</Link></p>
                </form>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary mt-5 w-1/2"><FaGoogle className='me-2' /> Login with Google</button> <br />
                <button onClick={handleGithubSignIn} className="btn btn-outline mt-4 w-1/2"> <FaGithub className='me-2'/> Login with Github</button>
            </div>
            <div className='md:mt-40'>
                <img src={sign} alt="" />
            </div>
        </div>
    );
};

export default Register;