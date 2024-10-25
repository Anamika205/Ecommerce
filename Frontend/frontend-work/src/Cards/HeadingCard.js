import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import React from 'react';
import Image from '../Assets/IconImage/Img1.png';
import Image2 from '../Assets/IconImage/Img2.png';
import Image3 from '../Assets/IconImage/Img3.png';
import Image4 from '../Assets/IconImage/Img4.png';
import Image5 from '../Assets/IconImage/Img5.png';
import Image6 from '../Assets/IconImage/Img6.png'
import { Typography } from '@mui/material';
import BannerImage from '../Assets/bannerimage.png';
import Shipped from '../Assets/IconImage/shipped.png';
import Exchange from '../Assets/IconImage/exchange.png';
import Handpicked from '../Assets/IconImage/harvest.png';
import Quality from '../Assets/IconImage/achievement.png';




function HeadingCard() {
    return (
        <Grid container sx={{ backgroundColor: "#E9EFEC" }}>
            <Grid xs={12} width='100%' display='flex' justifyContent='center' mt='6rem'>
                <Grid xs={8} width="100%" display='flex' justifyContent='center'>
                    <Box height='5rem' width='5%' sx={{ borderRadius: "1rem", boxShadow: 1, m: "2rem", bgcolor: "#FFDC7F", pl: "12px", pt: "1rem" }}><img src={Image} alt='image1' height='30px' width='30px'/>
                        <Typography fontSize='12px'>Top Brands</Typography></Box>
                    <Box height='5rem' width='5%' sx={{ borderRadius: "1rem", boxShadow: 1, m: "2rem", bgcolor: "#FFDC7F", pl: "12px", pt: "1rem" }}><img src={Image2} alt='image1' height='30px' width='30px'/>
                        <Typography fontSize='12px'>Buy one get one</Typography></Box>
                    <Box height='5rem' width='5%' sx={{ borderRadius: "1rem", boxShadow: 1, m: "2rem", bgcolor: "#FFDC7F", pl: "12px", pt: "1rem" }}><img src={Image3} alt='image1' height='30px' width='30px'/>
                        <Typography fontSize='12px'>Fashion</Typography></Box>
                    <Box height='5rem' width='5%' sx={{ borderRadius: "1rem", boxShadow: 1, m: "2rem", bgcolor: "#FFDC7F", pl: "12px", pt: "1rem" }}><img src={Image4} alt='image1' height='30px' width='30px'/>
                        <Typography fontSize='12px'>Fashion</Typography></Box>
                    <Box height='5rem' width='5%' sx={{ borderRadius: "1rem", boxShadow: 1, m: "2rem", bgcolor: "#FFDC7F", pl: "12px", pt: "1rem" }}><img src={Image5} alt='image1' height='30px' width='30px'/>
                        <Typography fontSize='12px'>Purchase</Typography></Box>
                    <Box height='5rem' width='5%' sx={{ borderRadius: "1rem", boxShadow: 1, m: "2rem", bgcolor: "#FFDC7F", pl: "12px", pt: "1rem" }}><img src={Image6} alt='image1' height='30px' width='30px'/>
                        <Typography fontSize='12px'>Kids</Typography></Box>

                </Grid>


            </Grid>

            <Box ml='12rem' mt='2rem'><img src={BannerImage} alt='BannerImage' height='500px' width='1200px' /></Box>

            <Grid display='flex' justifyContent='center' width='100%'mt='2rem'>
                <Box height='5rem' width='20%' ml='10rem' ><img src={Shipped} alt='shippement' height='50px' width='50px'/><Typography variant='h6'ml='-5rem' fontSize='14px' fontWeight='bold'>Free shipping for orders of INR 1499 or above</Typography></Box>
                <Box height='5rem' width='15%'><img src={Exchange} alt='Exchange' height='50px' width='50px'/><Typography variant='h6' fontSize='14px' ml='-1rem' fontWeight='bold'>Easy Exchange</Typography></Box>
                <Box height='5rem' width='15%'><img src={Quality} alt='Quality assure' height='50px' width='50px'/><Typography variant='h6' ml='-1rem' fontSize='14px' fontWeight='bold'>Assure quality</Typography></Box>
                <Box height='5rem' width='15%'><img src={Handpicked} alt='Handpicked' height='50px' width='50px'/><Typography variant='h6' ml='-1rem' fontSize='14px' fontWeight='bold'>Handpicked</Typography></Box>
            </Grid>
            <Grid display='flex' justifyContent='center' sx={{border:1, height:'100px', width:'100%', bgcolor:"#0B192C", mt:'2rem'}}>
            <Typography variant='h4' sx={{fontWeight:'bold', color:'#FCFAEE', fontStyle: "sans-serif"}}>Shopper Shopping</Typography></Grid>
           <Grid  mt='2rem' display='flex' width='100%' bgcolor='background: rgb(126,172,181);
background: linear-gradient(90deg, rgba(126,172,181,1) 14%, rgba(221,127,137,1) 52%, rgba(126,172,181,1) 95%);'>
                <Box width='100%' height='5rem'>
                    <Typography variant='h6' fontWeight='bold'>COMPANY</Typography>
                    <Typography fontSize='14px'>About</Typography>
                    <Typography fontSize='14px'>Awards & Recognition</Typography>
                    <Typography fontSize='14px'>Brand Profile</Typography>
                    <Typography fontSize='14px'>Sitemap</Typography>
                   
                </Box>
                 <Box width='100%'>
                    <Typography variant='h6' fontWeight='bold'>HELP</Typography>
                    <Typography fontSize='14px'>FAQ</Typography>
                    <Typography fontSize='14px'>Contact Us</Typography>
                    <Typography fontSize='14px'>Term & Conditions</Typography>
                    <Typography fontSize='14px'>Privacy Policy</Typography>
                    <Typography fontSize='14px'>Customs Duty</Typography>
                    <Typography fontSize='14px'>Secure Shopping</Typography>
                </Box>
                 <Box width='100%'>
                    <Typography variant='h6' fontWeight='bold'>ACCOUNT</Typography>
                    <Typography fontSize='14px'>Return/Exchange</Typography>
                    <Typography fontSize='14px'>Loyality & Registration T&C</Typography>
                    <Typography fontSize='14px'>Gift Card</Typography>
                </Box>
                 <Box width='100%'>
                 <Typography variant='h6' fontWeight='bold'>USEFUL LINKS</Typography>
                 <Typography fontSize='14px'>Blogs</Typography>
                 <Typography fontSize='14px'>Store Location</Typography>
                 <Typography fontSize='14px'>Sustainablity</Typography>
                 <Typography fontSize='14px'>Career</Typography>
                </Box>
                </Grid>

        </Grid>
    )
}

export default HeadingCard