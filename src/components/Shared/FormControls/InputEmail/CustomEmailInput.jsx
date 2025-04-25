import React from 'react';
import { Box, InputLabel, TextField, InputAdornment } from '@mui/material';
import './CustomEmailInput.css';

const CustomEmailInput = ({
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
  return (
    <Box className="email-field-wrapper">
      <InputLabel className="email-field-label" htmlFor={id} style={labelStyle}>
        {label}
      </InputLabel>
      <TextField
        className="email-field-input"
        type="email"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth
        error={!!error}
        helperText={helperText}
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

export default CustomEmailInput;