import React, { useEffect } from 'react';
import './Home.css'
import { Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import NavbarTeste from '../../components/estaticos/navbarteste/NavbarTeste';

function Home() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == '') {
            alert('Você precisa estar logado')
            navigate('/login')

        }
    }, [token])

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='caixa '>
                <NavbarTeste/>
                <Grid alignItems='center' item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulo mtop' >Seja bem vindo(a)!</Typography>
                        <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='center' className='titulo' >Aproveite para explorar o site!</Typography>
                    </Box>
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='caixa2' >
                <Grid item xs={6}>
                    <Box>
                        <Typography variant='h4'>Encontre usuarios que estão passando por situações similiares para que possam ajudar um ao outro e profissionais dispostos à ajudar.</Typography>
                        <Typography></Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} className='caixa2'>
                    <img src='https://cdn.discordapp.com/attachments/1023722354892869694/1048246433234563182/Sem_titulo-removebg-preview.png' alt="" width='500px' height='500px'></img>
                </Grid>
                <TabPostagem/>
            </Grid>
        </>
    );
}

export default Home;