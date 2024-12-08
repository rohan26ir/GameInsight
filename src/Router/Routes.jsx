import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Account/Login';
import Register from '../Account/Register';
import AuthLayout from '../Layout/AuthLayout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AllReviews from '../Pages/All Reviews/AllReviews';
import AddReview from '../Pages/Add Review/AddReview';
import MyReviews from '../Pages/My Reviews/MyReviews';
import GameWatchList from '../Pages/Game WatchList/GameWatchList';
import ErrorPage from '../Pages/Error/ErrorPage';
import HomeLayout from '../Layout/HomeLayout';
import MainLayout from '../Layout/MainLayout';
import UpdateReview from '../Pages/My Reviews/UpdateReview';
import ExploreDetails from '../Pages/All Reviews/ExploreDetails';

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
        loader: () => fetch('https://gameinsight-server.vercel.app/addReview'),
      },
      {
        path: '/all-reviews',
        element: <AllReviews></AllReviews>,
      },
      {
        path: '/review/:id',
        element: <ExploreDetails />,
        loader: async ({ params }) => {
          const response = await fetch(`https://gameinsight-server.vercel.app/review/${params.id}`);
          if (!response.ok) {
            throw new Error('Review not found');
          }
          return response.json();
        }
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
        path: '/updateReview/:id',
        element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>
      },
      {
        path: '/myWatchlist',
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
    ]
  }
]);

export default Routes;
