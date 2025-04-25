import React, { useState } from 'react';
import { Box, InputLabel, TextField, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './CustomPasswordInput.css';

const CustomPasswordInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  id = name,
  icon,
  iconSrc,
  labelStyle = {},
  textFieldProps = {},
  error,
  helperText,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box className="password-field-wrapper">
      <InputLabel className="password-field-label" htmlFor={id} style={labelStyle}>
        {label}
      </InputLabel>
      <TextField
        className="password-field-input"
        type={showPassword ? 'text' : 'password'}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth
        error={!!error}
        helperText={helperText}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                
                <IconButton
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? 
                  <img src={iconSrc} alt={`${icon}-logo`} />
                  : 
                  <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        {...textFieldProps}
      />
    </Box>
  );
};

export default CustomPasswordInput;