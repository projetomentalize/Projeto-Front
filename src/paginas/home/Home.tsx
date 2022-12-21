import React, { useEffect } from 'react';
import './Home.css'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ModalPostagem from '../../components/postagens/ModalPostagem/ModalPostagem';

function Home() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
  
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
            navigate('/login')

        }
    }, [token])

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='caixa '>
                <Grid alignItems='center' item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulo mtop' >Seja bem vindo(a)!</Typography>
                        <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='center' className='titulo' >Aproveite para explorar o site!</Typography>
                        </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/postagens" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
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