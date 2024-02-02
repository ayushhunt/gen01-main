//Code the Layout Footer it will contain details about the creator of website copy right details
//Portfolio social links 
//order now important links 
//contact us and address 

import React from 'react';
import { Box, Typography, Grid,IconButton,Link } from '@mui/material';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import CopyPhoneNumber from '../CopyPhoneNumber';


const Footer = () => {
    const brandColors = {
      facebook: '#3b5998',
      twitter: '#1da1f2',
      instagram: '#e1306c',
      linkedin: '#0077b5'
    };
    const phoneNumber='+919315996393';
    const Address="Address Villa-14, INDIRA NAGAR PHASE-A";
    const Address2="Indira Colony, Rajendra Nagar ,  Ghaziabad";

  return (
    <Box component="footer"  sx={{ bgcolor: '#FFFDD0', width: '100%', color: 'indigo' }}>
    
        <Grid container spacing={2} justifyContent="center" sx={{ mx: 'auto' ,p:4,m:0}}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Portfolio 
            </Typography>
            <Typography color="blueviolet" style={{fontSize:'14px'}}>
              Home
            </Typography>
            <Typography color="blueviolet" style={{fontSize:'14px'}}>
              Menu
            </Typography>
            <Typography color="blueviolet" style={{fontSize:'14px'}}>
              Order Now
            </Typography>
            <Typography color="blueviolet" style={{fontSize:'14px'}}>
              About us
            </Typography>
            {/* Company links */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Order through
            </Typography>
            <Typography color="blueviolet" style={{fontSize:'13px'}}>
            <Link href="https://magicpin.in/walletRecharge?merchantId=45466606" target="_blank" color="inherit">
              MagicPin
            </Link>
            <br/>
            <Link href="https://link.zomato.com/xqzv/rshare?id=65906199ce6b9ad7" target="_blank" color="inherit">
              Zomato
            </Link>
            <br/>
            <Link href="https://www.swiggy.com/menu/668834?source=sharing" target="_blank" color="inherit">
              Swiggy
            </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us 
            </Typography>
            <Typography style={{fontSize:'13px'}}>
            {phoneNumber}
            <CopyPhoneNumber phoneNumber={phoneNumber}/>
            <br/>
              {Address}
              <br/>
              {Address2}
            <IconButton
              color="primary"
              aria-label="Get Directions"
              component="a"
              href='https://maps.app.goo.gl/aNFeWUW28hsEKKAh9'
              target="_blank"
              rel="noopener noreferrer"
            >
                 <LocationOnIcon />
            </IconButton>
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
            {/* Wrap IconButton with Link */}
            <Link href="https://www.facebook.com" target="_blank" >
              <IconButton aria-label="Facebook" style={{ color: brandColors.facebook }}>
                <Facebook />
              </IconButton>
            </Link>
            <Link href="https://www.twitter.com" target="_blank" color="inherit">
              <IconButton aria-label="Twitter" style={{ color: brandColors.twitter }}>
                <Twitter/>
              </IconButton>
            </Link>
            <Link href="https://www.instagram.com/ayush4rmearth/" target="_blank" color="inherit">
              <IconButton aria-label="Instagram" style={{ color: brandColors.instagram }}>
                <Instagram />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" color="inherit">
              <IconButton aria-label="LinkedIn" style={{ color: brandColors.linkedin }}>
                <LinkedIn />
              </IconButton>
            </Link>
          </Box>
            {/* Social links */}
            
      

          </Grid>
        </Grid>

          <Typography variant="body2" align="center" sx={{ bgcolor: 'black', py: 2 }}>
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </Typography>
       
     
    </Box>
  );
};

export default Footer;
