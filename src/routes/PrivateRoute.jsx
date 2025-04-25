import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, allowedRoles = [] }) => {
  const user = useSelector(state => state?.user?.user);

  if (!user) return <Navigate to="/" />;

  // If no specific roles required, or user role is allowed
  if (allowedRoles.length === 0 || allowedRoles.includes(user.role)) {
    return children;
  }

  // If role not allowed
  return <Navigate to="/unauthorized" />;
};

export default PrivateRoute;
