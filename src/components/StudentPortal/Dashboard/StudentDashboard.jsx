
import React from 'react';
import './StudentDashboard.css';
import { Typography, Box, Button } from '@mui/material';
import CustomInputText from '../../Shared/FormControls/InputText/CustomInput';


const Dashboard = () => {
var i = 0;
  const handleButtonClick = () => {
    i = i + 1;
    console.log("Button clicked!  " + i);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Student Dashboard
      </Typography>
      <Typography variant="body1">
        Here you can manage your profile, view your courses, and track your progress.
      </Typography>
      <CustomInputText
        label="Input Field"
        name="reasonForConsultation"
        // value={"ABCS"}
        // onChange={handleInputChange}
        placeholder="Enter value"
      />
      <Button className='secondary-button' sx={{ marginTop: 2 }} onClick={handleButtonClick}>
        Click Me
      </Button>
    </Box>
  );
};

export default Dashboard;
