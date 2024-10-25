import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Grid from '@mui/material/Grid2';
import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';



const Login=()=> {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); 

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    const loginDetails = {
        email: email,
        password: password,
      
    };
    try {
      // Send POST request using axios
      const response = await axios.post('http://localhost:5000/api/login/addlogin', loginDetails);
      console.log(response);
      

      setMessage('Login successful!');
    } catch (error) {
      // Handle error
      if (error.response) {
        setMessage(error.response.data.error || 'Login failed.');
      } else {
        setMessage('An error occurred: ' + error.message);
      }
    }
  };
 
  return (

    <Grid container bgcolor="#edede9">
      <Navbar />

      <Grid sx={{bgcolor:"#7EACB5", margin: "10rem", ml: "35rem", display: "flex",boxShadow:2,border:"#3A6D8C", justifyContent: "center",  borderColor: "#001F3F", width: "30%", height: "24rem" }}>
        <Box>
          <Typography variant='h4' fontWeight="bold" p='1rem' pl='4rem' mt='1rem' color='#13137f' sx={{ fontStyle: 'serif' }} >Login</Typography>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          <form onSubmit={handleLogin}>
          <Box  display='flex' justifyContent='space-between' mb='2rem' >
            <label>Email</label>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           
          </Box>
          <Box >
            <label>Password</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
      <Typography fontSize='small' color='#0a7b91' ml='4rem'>Forgot Password?</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between' p='1rem'>
            <Button variant='contained' type='submit'>Login</Button>
            <Button variant='contained'>Cancel</Button>
          </Box>
          </form>
        </Box>
        
      </Grid>


    </Grid>


  )
}

export default Login