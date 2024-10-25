import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import DataItem from '../Assets/Data';
import { Button} from '@mui/material';
import Navbar from '../Components/Navbar'

const ImageGrid = () => {
  return (
    <Grid container spacing={3} width='100%' mr='2rem' >
      <Navbar/>
      <Grid mt='4rem'>
      {DataItem.map((image) => (
        <Grid item xs={3} marginRight='3rem' key={image.id}>
          <Box
           mr='2rem'
       
            component="img"
            sx={{
              width: '20%',
              height: '75%',
              borderRadius: '8px',
              boxShadow: 2,
            }}
            alt={image.alt}
            src={image.src}
          />
          <Button sx={{bgcolor:'#FCCD2A', color:"#161D6F", fontSize:"large", ml:"-15rem", mb:"2rem"}}  >Add to cart</Button>
          <Box
          mr='2rem'
          ml='8rem'
            component="img"
            sx={{
              width: '20%',
              height: '75%',
              borderRadius: '8px',
              boxShadow: 2,
            }}
            alt={image.alt}
            src={image.src}
          />
         
         <Button sx={{bgcolor:'#FCCD2A', color:"#161D6F", fontSize:"large", ml:"-15rem", mb:"2rem"}}  >Add to cart</Button>

          <Box
          ml='8rem'
            component="img"
            sx={{
              width:'20%',
              height: '75%',
              borderRadius: '8px',
              boxShadow: 4,
            }}
            alt={image.alt}
            src={image.src}
          />
 <Button sx={{bgcolor:'#FCCD2A', color:"#161D6F", fontSize:"large", ml:"-13rem", mb:"2rem"}}  >Add to cart</Button>
        </Grid>
      ))}
      </Grid>
    </Grid>
  );
};

export default ImageGrid;
