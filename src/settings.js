import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';


const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  gap: '50px', // Added gap between forms
});

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '500px',
});

const InputField = styled(TextField)({
  marginTop: '10px', // Adjusted for vertical spacing
  width: '100%' // Ensure input fields take the full width of their parent container
});

const TemperatureInputPage = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      temperature: formData.get('temperature'),
      temperature2: formData.get('temperature2'),
      temperature3: formData.get('temperature3'),
      tolerance: formData.get('tolerance'), // New tolerance input
      pressure: formData.get('pressure'),
      pressure2: formData.get('pressure2'),
      pressure3: formData.get('pressure3'),
      tolerance2: formData.get('tolerance2'), // New tolerance input for pressure
      time: formData.get('time'), // New time input
    };
    console.log(data); // Process data as needed
  };

  return (
    
      
      <div
        style={{
          
          //backgroundImage: `url('https://img.freepik.com/free-photo/abstract-studio-background-texture-light-blue-gray-gradient-wall-flat-floor-product_1258-53990.jpg?t=st=1710351218~exp=1710354818~hmac=8c628c5552cac1ec4c4fe9abd365032e498318485ce4fd489d00741102b97651&w=996')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
         
          backgroundColor: "#dad7cd",
          minHeight: '100vh', // Ensures the background covers the entire viewport height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        
          
              <Container>
                <FormContainer component="form" noValidate onSubmit={handleSubmit}>
                  <Typography variant="h4" component="h1" gutterBottom>
                    Set Temperatures
                  </Typography>
                  <InputField required id="temperature" name="temperature" label="Temperature-1 °C" variant="outlined" /> 
                  <InputField required id="temperature2" name="temperature2" label="Temperature-2 °C " variant="outlined" />
                  <InputField required id="temperature3" name="temperature3" label="Temperature-3 °C" variant="outlined" />
                  <InputField required id="tolerance" name="tolerance" label="Tolerance  (±) °C" variant="outlined" />
                </FormContainer>
                
                <FormContainer component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <Typography variant="h4" component="h1" gutterBottom>
                    Set Pressures
                  </Typography>
                  <InputField required id="pressure" name="pressure" label="Pressure-1 bar" variant="outlined" />
                  <InputField required id="pressure2" name="pressure2" label="Pressure-2 bar" variant="outlined" />
                  <InputField required id="pressure3" name="pressure3" label="Pressure-3 bar" variant="outlined" />
                  <InputField required id="tolerance2" name="tolerance2" label="Tolerance (±) bar" variant="outlined" />
                </FormContainer>
                
                <FormContainer component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <Typography variant="h4" component="h1" gutterBottom>
                    Set Curing Time
                  </Typography>
                  <InputField required id="time" name="time" label="Curing Time" variant="outlined" />
                  <Button component={Link} to="/Heatingplates" sx={{
    backgroundColor: "#3a5a40",
  }}variant="contained" backgroundColor= "#a3b18a" endIcon={<ArrowRightCircle size="20" />}>
                    Heat Plate Selection
                  </Button>
                </FormContainer>
              </Container>
            
          
      </div>
      
    
  );
};

export default TemperatureInputPage;
