import React, { useContext } from 'react';
import logo from '../assets/logo-dark.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

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
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <NavLink>Home</NavLink>
            <NavLink>Blog</NavLink>
          </ul>
        </li>
      </ul>
    </div>
    <Link to='/' className="w-32">
        <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLink className='me-5'>Home</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
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
      <div className="rounded-full w-12 tooltip tooltip-bottom" data-tip="hello">
      <img className='rounded-full' src='https://i.pravatar.cc/150?img=3' alt="" />
    </div>
    }
  </div>
</div>
        </div>
    );
};

export default NavRanna;