import React, { useState } from "react";
import "./StudentDashboard.css";
import { Typography, Box, Button } from "@mui/material";
import CustomInputText from "../../Shared/FormControls/InputText/CustomInput";
import callAPI from "../../../commonservices/APIRequests";
import { toast } from "react-toastify";

const StudentDashboard = () => {
  const [counter, setCounter] = useState(0);

  const handleButtonClick = async () => {
    setCounter((prev) => prev + 1);
    console.log("Button clicked! Count:", counter + 1);

    try {
      // GET Request
      const getResponse = await callAPI.get("/dashboard/student", { param: "test" });
      console.log("GET Response:", getResponse.data);
      toast.error("GET Request failed");

      // // POST Request
      // const postResponse = await callAPI.post("/dashboard/student", { name: "New Student" });
      // console.log("POST Response:", postResponse.data);
      // toast.success("POST Request Successful");

      // // PUT Request
      // const putResponse = await callAPI.put("/dashboard/student/1", { name: "Updated Student" });
      // console.log("PUT Response:", putResponse.data);
      // toast.success("PUT Request Successful");

      // // PATCH Request
      // const patchResponse = await callAPI.patch("/dashboard/student/1", { courses: ["Math", "History"] });
      // console.log("PATCH Response:", patchResponse.data);
      // toast.success("PATCH Request Successful");

      // DELETE Request
      // const deleteResponse = await callAPI.del("/dashboard/student/1");
      // console.log("DELETE Response:", deleteResponse.data);
      // toast.success("DELETE Request Successful");

      // // GET User Profile
      // const profileResponse = await callAPI.get("/user/profile");
      // console.log("User Profile Response:", profileResponse.data);
      // toast.success("User Profile Fetch Successful");

      // PUT User Profile
      // const updateProfileResponse = await callAPI.put("/user/profile", { email: "newemail@example.com" });
      // console.log("Update User Profile Response:", updateProfileResponse.data);
      // toast.success("User Profile Update Successful");
    } catch (error) {
      console.error("API Error:", error.message);
      toast.error(`API Error: ${error.message}`);
    }
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
        placeholder="Enter value"
      />
      <Button className="primary-button" sx={{ marginTop: 2 }} onClick={handleButtonClick}>
        Test API
      </Button>
    </Box>
  );
};

export default StudentDashboard;