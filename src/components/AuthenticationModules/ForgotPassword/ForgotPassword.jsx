import React, { useState } from 'react';
import FormTemplate from '../AuthenticationFormTemplates/AuthenticationFormTemplate';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (formData) => {
    setError('');
    setSuccess('');
    const email = formData['email-id'];
    // Placeholder logic for password reset
    if (email) {
      setSuccess('Password reset link sent to your email.');
    } else {
      setError('Please enter a valid email.');
    }
  };

  const fields = [
    {
      label: 'Email Id',
      placeholder: '@example.com',
      type: 'email',
      value: email,
      required: true,
      onChange: (e) => setEmail(e.target.value),
      icon: 'mail',
    },
  ];

  return (
    <FormTemplate
      title="Reset Your Password"
      subtitle="Enter your email to receive a password reset link."
      fields={fields}
      links={[{ text: 'Back to Login', href: '/' }]}
      buttonText="Send Reset Link"
      onSubmit={handleSubmit}
      error={error}
    />
  );
};

export default ForgotPassword;