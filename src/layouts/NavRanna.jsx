import React, { useContext } from 'react';
import logo from '../assets/logo-dark.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavRanna = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => {
      console.log(error);
    })
  }

    return (
        <div className='my-container'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-400"
                      >
                        Blog
                      </Link>
                    </li>
      </ul>
    </div>
    <Link to='/' className="w-32">
        <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className="hover:text-red-500 duration-200 font-thin text-lg">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-red-500 duration-200 font-thin text-lg">
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ?
      <button onClick={handleLogOut} className='me-4 btn btn-sm text-white btn-error'>Log Out</button> :
      <Link className='btn btn-sm text-white btn-secondaty' to='/login'>Login</Link>
    }
    {
      user && 
      <div className="rounded-full w-12 tooltip tooltip-bottom" data-tip={user?.displayName}>
        <img className='rounded-full' src={user?.photoURL} alt="" />
    </div>
    }
  </div>
</div>
        </div>
    );
};

export default NavRanna;