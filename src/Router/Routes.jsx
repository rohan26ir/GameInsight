import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Account/Login';
import Register from '../Account/Register';
import AuthLayout from '../Layout/AuthLayout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ForgetPass from '../Account/ForgetPass';
import AllReviews from '../Pages/All Reviews/AllReviews';
import AddReview from '../Pages/Add Review/AddReview';
import MyReviews from '../Pages/My Reviews/MyReviews';
import GameWatchList from '../Pages/Game WatchList/GameWatchList';
import ErrorPage from '../Pages/Error/ErrorPage';
import HomeLayout from '../Layout/HomeLayout';
import MainLayout from '../Layout/MainLayout';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>  ,
    children: [
      // Public 
      {
        path: '/',
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: '/all-reviews',
        element: <AllReviews></AllReviews>,
        loader: () => fetch('http://localhost:5000/addReview'),
      },

      // Private 
      {
        path: '/add-review',
        element: <PrivateRoute><AddReview /></PrivateRoute>
      },
      {
        path: '/my-reviews',
        element: <PrivateRoute><MyReviews /></PrivateRoute>
      },
      {
        path: '/game-watchList',
        element: <PrivateRoute><GameWatchList /></PrivateRoute>
      },
    ]
  },
  {
    // Auth 
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'forget-password',
        element: <ForgetPass></ForgetPass>
      }
    ]
  }
]);

export default Routes;
