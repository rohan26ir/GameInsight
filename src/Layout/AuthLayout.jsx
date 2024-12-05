import React from 'react';
import Navbar from '../components/Navbar';
// import Login from '../Account/Login';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <header className='top-0 mb-8'>
        <Navbar></Navbar>
      </header>
      <main>
        {/* <Login></Login> */}

        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;