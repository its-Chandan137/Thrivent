import React from 'react';
import { FormControl, Button, Link, Box } from '@mui/material';
import formBackImage from '../../../assets/images/AuthFormTemplateImage.png';
import setupPNG from '../../../assets/images/setupPngImage.png';
import formImage from '../../../assets/Images/Rightwise-logo.png';
import mailLogo from '../../../assets/Icons/sms-icon.svg';
import lockLogo from '../../../assets/Icons/lock-icon.svg';
import CustomEmailInput from '../../Shared/FormControls/InputEmail/CustomEmailInput';
import CustomPasswordInput from '../../Shared/FormControls/InputPassword/CustomPasswordInput';
import './AuthenticationFormTemplate.css';
import { useFormWithValidation } from '../../utils/formValidation';
import { Controller } from 'react-hook-form';

const AuthenticationFormTemplate = ({
  title = 'Let the Journey Begin!',
  subtitle = 'Unlock a world of education with a single click! Please login to your account.',
  fields = [],
  links = [],
  buttonText = 'Submit',
  onSubmit,
  error,
  success,
}) => {
  const { control, handleSubmit, formState: { errors } } = useFormWithValidation(fields);

  return (
    <div className="centered-container">
      <div className="sign-in-page-wrapper">
        <div className="sign-in-content-wrapper">
          <div className="sign-in-left-side-intro-image-wrapper">
            <img src={formBackImage} className="formBackImage" alt="Background" />
            <img src={setupPNG} className="setupPNG" alt="setupPNG" />
            <div className="image-content-wrapper">
              <h1>Welcome to</h1>
              <h1>student portal</h1>
              <p>Login to access your account</p>
            </div>
          </div>
          <div className="sign-in-right-side-form-wrapper">
            <div className="form-logo-wrapper">
              <img src={formImage} alt="Logo" />
            </div>
            <div className="form-subheading-wrapper">
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
            <FormControl className="sign-in-form-content-wrapper">
              {error && (
                <div className="error-message" style={{ color: 'red', marginBottom: '16px' }}>
                  {error}
                </div>
              )}
              {success && (
                <div className="success-message" style={{ color: 'green', marginBottom: '16px' }}>
                  {success}
                </div>
              )}
              {fields.map((field, index) => (
                <Controller
                  key={index}
                  name={field.label.toLowerCase().replace(' ', '-')}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <div className="label-with-input-field">
                      {field.icon === 'mail' ? (
                        <CustomEmailInput
                          label={field.label}
                          name={field.label.toLowerCase().replace(' ', '-')}
                          value={value} // Use value from Controller
                          onChange={onChange} // Use onChange from Controller
                          placeholder={field.placeholder}
                          icon={field.icon}
                          iconSrc={mailLogo}
                          error={errors[field.label.toLowerCase().replace(' ', '-')]?.message}
                          helperText={errors[field.label.toLowerCase().replace(' ', '-')]?.message}
                        />
                      ) : (
                        <CustomPasswordInput
                          label={field.label}
                          name={field.label.toLowerCase().replace(' ', '-')}
                          value={value} // Use value from Controller
                          onChange={onChange} // Use onChange from Controller
                          placeholder={field.placeholder}
                          icon={field.icon}
                          iconSrc={lockLogo}
                          error={errors[field.label.toLowerCase().replace(' ', '-')]?.message}
                          helperText={errors[field.label.toLowerCase().replace(' ', '-')]?.message}
                        />
                      )}
                    </div>
                  )}
                />
              ))}
              {links.map((link, index) => (
                <Box key={index} className='text-end w-100'>
                  <Link key={index} href={link.href} underline="none">
                    {link.text}
                  </Link>
                </Box>
              ))}
              <Button variant="contained" className='primary-button' onClick={handleSubmit(onSubmit)}>
                {buttonText}
              </Button>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationFormTemplate;