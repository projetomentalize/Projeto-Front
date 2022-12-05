import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <>
            <AppBar position="fixed">
                <Toolbar  className='fundo' variant="dense">
                    <Box className='logo' >                   
                        <img src="https://raw.githubusercontent.com/projetomentalize/midia/main/logolandscape.png" height={60} alt='logoMentalize'/>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='item'>
                        <Link to='/'>
                            <Typography className='texto' variant="h6" color="inherit">
                                Pagina Inicial
                            </Typography>
                        </Link> 
                        </Box>
                        <Box mx={1} className='item'>
                            <Link to='/sobrenos'>
                            <Typography  className='texto' variant="h6" color="inherit">
                                Sobre Nós
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className='item'>
                            <Link to='/contato'>
                            <Typography className='texto' variant="h6" color="inherit">
                               Contato
                            </Typography>
                            </Link>
                        </Box>
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;