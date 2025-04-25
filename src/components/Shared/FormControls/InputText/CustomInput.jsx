import React from 'react';
import { Box, InputLabel, TextField } from '@mui/material';

const CustomInputText = ({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  id = name,
  labelStyle = {},
  textFieldProps = {},
}) => {
  return (
    <Box>
      <InputLabel htmlFor={id} style={labelStyle}>
        {label}
      </InputLabel>
      <TextField
        className="w-50"
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...textFieldProps}
      />
    </Box>
  );
};

export default CustomInputText;

// Usage Example:

{/* <CustomInputText
  label="Input Field"
  name="reasonForConsultation"
  value={formData.reasonForConsultation}
  onChange={handleInputChange}
  placeholder="Enter value"
/> */}

// Add required, disabled, or fullWidth using textFieldProps :

// // // // textFieldProps={{ fullWidth: true, required: true }}
