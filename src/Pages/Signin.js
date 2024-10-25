import { Button, TextField, Typography } from '@mui/material'
import  Grid  from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Navbar from '../Components/Navbar'

function Signin() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
   <Grid container width='100%'>
    <Navbar/>
    <Grid width='100%' display='flex' justifyContent='center' mt='10rem'>
    <Box height='500px' width='25%' bgcolor='' sx={{ boxShadow:2}} >
      <Typography sx={{m:1, ml:"9rem", fontSize:"24px", fontWeight:"bold"}}>SIGN IN</Typography>
      <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          sx={{ m: 1, width: '25ch', ml:"5rem" }}
        />
       <FormControl sx={{ m: 1, width: '25ch', ml:"5rem" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      <Box display='flex' justifyContent='space-around' ml="3.5rem" mr='3.5rem'>
        <Typography fontSize="14px">Forgot password</Typography>
        <Typography fontSize="14px">Signup</Typography>
        
      </Box>
      <Box sx={{ m: 1, width: '100%', ml:"5rem" }}>
      <Button sx={{color:"#D91656", bgcolor:"#C0EBA6", size:'large', minWidth:"14rem", fontWeight:"bold"}}>Login</Button>
      </Box>
    </Box>
    </Grid>
   </Grid>
  )
}

export default Signin