import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/FirebaseInit.config';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState("");


  // console.log(user);
  

  // Create new user

  const createNewUser =(name, photoUrl , email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, name, photoUrl, email , password)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth).then(() => {
      // Redirect after successful logout
      navigate(location?.state ? location.state : '/about');
    })
      .catch((error) => {
      console.error('Sign-out error:', error);
    })
  };


  // sign in
  const logIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // sign in with Google
  const signInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }


  // forget password
  
  // const handleForgetPass = (email) => {
  //   if (!email) {
  //     setErrorMessage("Please provide an email address.");
  //     return;
  //   }
  
  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       Swal.fire({
  //         position: "top-center",
  //         icon: "success",
  //         title: `Password reset email sent to ${email}.`,
  //         showConfirmButton: false,
  //         timer: 2000,
  //       });
  //     })
  //     .catch((error) => {
  //       setErrorMessage(error.message);
  //     });
  // };
  
  const handleForgetPass = (email) => {
    return sendPasswordResetEmail(auth, email); 
  };
  


  const authInfo = {

    user,
    setUser,
    signInWithGoogle,
    createNewUser,
    logOut,
    logIn,
    loading,
    message,
    setMessage,
    handleForgetPass,
    errorMessage,
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return() =>{
      unsubscribe()
    }
  },[])



  return (
    <AuthContext.Provider value={authInfo}>
           {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;