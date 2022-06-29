import React from 'react';
import {
    Navigate
} from 'react-router-dom';
import { useSelector } from 'react-redux';

//@ts-ignore
const PrivateRoute = ({ children }) => {
    //@ts-ignore
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    if (!isLoggedIn) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

export default PrivateRoute;