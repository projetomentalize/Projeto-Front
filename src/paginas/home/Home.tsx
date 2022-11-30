import React from "react";
import  './Home.css'
import {Grid, Button, Typography} from '@material-ui/core'
import {Box} from '@mui/material'

function Home(){
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo' >Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo' >expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://github.com/projetomentalize/midia/blob/main/500x500logo.png?raw=true" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
</>
    );
}

export default Home;