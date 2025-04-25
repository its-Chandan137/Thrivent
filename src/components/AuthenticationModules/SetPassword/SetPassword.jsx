import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormTemplate from '../AuthenticationFormTemplates/AuthenticationFormTemplate';

const SetPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSetPassword = (formData) => {
    setError('');
    setSuccess('');

    const email = formData['email'];
    const newPassword = formData['new-password'];
    const confirmPassword = formData['confirm-password'];

    // Validate password match
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }

    // Simulate password reset (replace with API call in a real app)
    // For now, just set success message and navigate
    setSuccess('Password has been successfully set!');
    setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 seconds
  };

  const fields = [
    {
      label: 'Email',
      placeholder: '@example.com',
      type: 'email',
      required: true,
      icon: 'mail',
    },
    {
      label: 'New Password',
      placeholder: '**************',
      type: 'password',
      required: true,
      icon: 'lock',
    },
    {
      label: 'Confirm Password',
      placeholder: '**************',
      type: 'password',
      required: true,
      icon: 'lock',
    },
  ];

  const links = [
    {
      text: 'Back to Login',
      href: '/login',
    },
  ];

  return (
    <FormTemplate
      title="Set New Password"
      subtitle="Create a new password to access your account."
      fields={fields}
      links={links}
      buttonText="Set Password"
      onSubmit={handleSetPassword}
      error={error}
      success={success}
    />
  );
};

export default SetPassword;