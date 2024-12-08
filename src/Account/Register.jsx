import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const { createNewUser, setUser, updateUserProfile, signInWithGoogle, darkMode } = useContext(AuthContext);
  const navigate = useNavigate();

  const themeMode = darkMode
    ? "bg-gradient-to-br from-[#1a1c2b] via-[#29274c] to-[#4a3b74] text-white"
    : "bg-[#FFF5CD] text-black";

    const btnMode = darkMode
    ? "bg-gray-500 text-white"
    : "bg-white text-black";

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get('name');
    const photo = form.get('photoUrl');
    const email = form.get('email');
    const password = form.get('password');

    // Validate password
    const passwordValidation = validatePassword(password);
    if (passwordValidation) {
      setPasswordError(passwordValidation);
      return;
    } else {
      setPasswordError('');
    }

    if (!name || !photo || !email || !password) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required!',
      });
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        return updateUserProfile({ displayName: name, photoURL: photo });
      })
      .then(() => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `Welcome, ${name}!`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        });
      });
  };

  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);

        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `Welcome, ${user.displayName || 'User'}!`,
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          navigate(location?.state ? location.state : '/');
        }, 1600);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        });
      });
  };

  // Password validation function
  const validatePassword = (password) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter.';
    }
    return '';
  };

  return (
    <div className={`min-h-screen flex justify-center items-center p-4 relative overflow-hidden ${themeMode}`}>
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute bg-purple-500 opacity-50 blur-xl w-72 h-72 rounded-full top-10 left-16 animate-pulse"></div>
        <div className="absolute bg-gray-500 opacity-40 blur-2xl w-96 h-96 rounded-full bottom-20 right-20"></div>
      </div>


      <Helmet>
        <title>Register - Coupon Catcher</title>
      </Helmet>

      <div className="relative z-10 w-full max-w-md bg-opacity-90 bg-[#2b2b40] p-2 shadow-xl rounded-lg border border-gray-600 m-8">
        <h2 className="text-center text-2xl font-bold mx-auto py-5 border-b-[1px] border-gray-400 w-[80%] text-[#ffeba7]" style={{ textShadow: '1px 1px 20px #ffeba7' }}>
          Register your account
        </h2>

        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Your Name</span>
            </label>
            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Photo URL</span>
            </label>
            <input type="text" name="photoUrl" placeholder="Enter your photo URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="h-8 w-8 cursor-pointer text-orange-500 absolute right-4 top-11 rounded-full flex justify-center items-center"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <div className="text-xl">
                {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              
            )}
          </div>
          <div className="form-control mt-3">
            <button type="submit" className={ `btn btn-neutral rounded-none ${btnMode}`}>
              Register
            </button>
          </div>
          <div>
          <p className="text-sm text-center py-1 text-white">
            Already have an account?{" "}
            <Link to={'/auth/login'}>
            <span className="text-blue-600">Login here</span>
            </Link>
          </p>
          </div>
          <div className="form-control">
            <div onClick={handleSignInGoogle} className="btn bg-red-600 text-white">
              <FcGoogle /> Log in with Google
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;