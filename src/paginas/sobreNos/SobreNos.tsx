import React from "react";
import  './Home.css'
import {Grid, Button, Typography} from '@material-ui/core'
import {Box} from '@mui/material'

function Home(){
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa '>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo mtop' >Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo' >Aproveite para explorar o site!</Typography>
                    </Box>
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa2' >
                <Grid item xs={6}>
                    <Box>
                        <Typography variant="h4">Encontre usuarios que estão passando por situações similiares para que possam ajudar um ao outro e profissionais dispostos à ajudar.</Typography>
                        <Typography></Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} className='caixa2'>
                    <img src="https://img.freepik.com/vetores-gratis/ilustracao-em-vetor-conceito-abstrato-meetup-online-chamada-em-conferencia-juntar-se-ao-grupo-meetup-servico-online-de-video-chamada-comunicacao-a-distancia-reuniao-informal-metafora-abstrata-de-rede-de-membros_335657-2920.jpg?w=2000" alt="" width="500px" height="500px"></img>
                </Grid>
            </Grid>
</>
    );
}

