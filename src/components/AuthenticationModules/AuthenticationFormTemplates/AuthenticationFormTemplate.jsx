import React from 'react';
import {
  FormControl,
  FormLabel,
  Button,
  Link,
} from '@mui/material';

import formBackImage from '../../../assets/images/AuthFormTemplateImage.png';
import setupPNG from '../../../assets/images/setupPngImage.png';
import formImage from '../../../assets/Images/Rightwise-logo.png';
import mailLogo from '../../../assets/Icons/sms-icon.svg';
import lockLogo from '../../../assets/Icons/lock-icon.svg';
import CustomEmailInput from '../../Shared/FormControls/InputEmail/CustomEmailInput';
import CustomPasswordInput from '../../Shared/FormControls/InputPassword/CustomPasswordInput';
import './AuthenticationFormTemplate.css';

const AuthenticationFormTemplate = ({
  title = 'Let the Journey Begin!',
  subtitle = 'Unlock a world of education with a single click! Please login to your account.',
  fields = [],
  links = [],
  buttonText = 'Submit',
  onSubmit,
  error,
}) => {


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
              {fields.map((field, index) => (
                <div className="label-with-input-field" key={index}>
                  {/* <FormLabel>
                    <span>{field.label}</span>
                  </FormLabel> */}
                  {field.icon === 'mail' ? (
                    <CustomEmailInput
                      label={field.label}
                      name={field.label.toLowerCase().replace(' ', '-')}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder={field.placeholder}
                      icon={field.icon}
                      iconSrc={mailLogo}
                    />
                  ) : (
                    <CustomPasswordInput
                      label={field.label}
                      name={field.label.toLowerCase().replace(' ', '-')}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder={field.placeholder}
                      icon={field.icon}
                      iconSrc={lockLogo}
                    />
                  )}
                </div>
              ))}
              {links.map((link, index) => (
                <Link key={index} href={link.href} underline="none">
                  {link.text}
                </Link>
              ))}
              <Button variant="contained" onClick={onSubmit}>
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