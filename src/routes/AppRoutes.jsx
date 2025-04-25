import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { ROLES } from '../constants/roles';

// Pages
import StudentDashboard from '../components/StudentPortal/Dashboard/StudentDashboard';
import AdminDashboard from '../components/AdminPortal/Dashboard/AdminDashboard';
import ParentDashboard from '../components/ParentsPortal/Dashboard/ParentDashboard';
import Unauthorized from '../components/Unauthorized\'/Unauthorized';
import Login from '../components/AuthenticationModules/Login/Login';
import CounsellorDashboard from '../components/CounsellorPortal/Dashboard/CounsellorDashboard';
import ForgotPassword from '../components/AuthenticationModules/ForgotPassword/ForgotPassword';

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<StudentDashboard />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route
        path="/student/dashboard"
        element={
          <PrivateRoute allowedRoles={[ROLES.STUDENT, ROLES.COUNSELLOR, ROLES.ADMIN]}>
            <StudentDashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute allowedRoles={[ROLES.ADMIN]}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/parent/dashboard"
        element={
          <PrivateRoute allowedRoles={[ROLES.PARENT]}>
            <ParentDashboard />
          </PrivateRoute>
        }
      />


      <Route
        path="/counsellor/dashboard"
        element={
          <PrivateRoute allowedRoles={[ROLES.COUNSELLOR]}>
            <CounsellorDashboard />
          </PrivateRoute>
        }
      />

      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
};

export default AppRoutes;
