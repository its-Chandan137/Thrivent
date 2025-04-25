import React from 'react';
import { Box, InputLabel, TextField, InputAdornment } from '@mui/material';
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
}) => {
  return (
    <Box className="password-field-wrapper">
      <InputLabel className='password-field-label' htmlFor={id} style={labelStyle}>
        {label}
      </InputLabel>
      <TextField
        className="password-field-input"
        type="password"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth
        slotProps={{
          input: iconSrc
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={iconSrc} alt={`${icon}-logo`} />
                  </InputAdornment>
                ),
              }
            : {},
        }}
        {...textFieldProps}
      />
    </Box>
  );
};

export default CustomPasswordInput;