import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/slices/userSlice';
import FormTemplate from '../AuthenticationFormTemplates/AuthenticationFormTemplate';
import { ROLES } from '../../../constants/roles';

// Static users for authentication
const STATIC_USERS = [
  {
    id: '1',
    email: 'student@gmail.com',
    password: 'Password@123',
    name: 'Student User',
    role: ROLES.STUDENT,
  },
  {
    id: '2',
    email: 'parent@gmail.com',
    password: 'Password@123',
    name: 'Parent User',
    role: ROLES.PARENT,
  },
  {
    id: '3',
    email: 'counsellor@gmail.com',
    password: 'Password@123',
    name: 'Counsellor User',
    role: ROLES.COUNSELLOR,
  },
  {
    id: '4',
    email: 'admin@gmail.com',
    password: 'Password@123',
    name: 'Admin User',
    role: ROLES.ADMIN,
  },
];

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const getDashboardRoute = (role) => {
    switch (role) {
      case ROLES.STUDENT:
        return '/student/dashboard';
      case ROLES.PARENT:
        return '/parent/dashboard';
      case ROLES.COUNSELLOR:
      case ROLES.ADMIN:
        return '/counsellor/dashboard';
      default:
        return '/';
    }
  };

  const handleLogin = () => {
    setError('');

    // Find user by email and password
    const user = STATIC_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Dispatch user to Redux store
      dispatch(setUser({
        id: user.id,
        name: user.name,
        role: user.role,
        email: user.email,
      }));

      // Navigate to the appropriate dashboard
      navigate(getDashboardRoute(user.role));
    } else {
      setError('Invalid email or password');
    }
  };

  const fields = [
    {
      label: 'Email Id',
      placeholder: '@example.com',
      type: 'email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      icon: 'mail',
    },
    {
      label: 'Password',
      placeholder: '**************',
      type: 'password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      icon: 'lock',
    },
  ];

  const links = [
    {
      text: 'Forgot Password?',
      href: '/forgot-password', // Placeholder for future Forgot Password page
    },
  ];

  return (
    <FormTemplate
      title="Let the Journey Begin!"
      subtitle="Unlock a world of education with a single click! Please login to your account."
      fields={fields}
      links={links}
      buttonText="Login"
      onSubmit={handleLogin}
      error={error}
    />
  );
};

export default Login;