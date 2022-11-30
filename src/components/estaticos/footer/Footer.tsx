import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

function Footer(){

    return(

       <>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Mentalize</Typography>
                            <Box display="flex" alignItems="" justifyContent="end">
                            <a href="" target="_blank">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            </Box>
                        </Box>
                        {/* <Box display="flex" alignItems="" justifyContent="end">
                            <a href="" target="_blank">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            </Box> */}
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={2}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >©2022 Copyright:mentalize.com.br</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
       </> 
    );
}

export default Footer;