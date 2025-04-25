
import React from 'react';
import './StudentDashboard.css';
import { Typography, Box, Button } from '@mui/material';
import CustomInputText from '../../Shared/FormControls/InputText/CustomInput';


const Dashboard = () => {

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
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Box>
  );
};

export default Dashboard;
