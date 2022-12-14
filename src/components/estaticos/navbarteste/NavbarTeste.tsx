import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ModalLogin from '../../login/modalLogin/ModalLogin';
import './NavbarTeste.css'

function NavbarTeste() {
    return (
        <>
            <AppBar position="fixed" className='navbar'>
                <Toolbar className='fundo' variant="dense" >
                    <Box className='logo' >
                        <img src="https://raw.githubusercontent.com/projetomentalize/midia/5b75364a92009a3098609fe8fa0b46298edb1dc1/logosf.svg" alt='logoMentalize' />
                    </Box>
                    <Box display="flex" justifyContent="end">
                        <Box mx={1} className='item'>
                            <Link to='/'>
                                <Typography className='texto' variant="h6" color="inherit">
                                    Pagina Inicial
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className='item'>
                            <Link to='/sobrenos'>
                                <Typography className='texto' variant="h6" color="inherit">
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
                        <Box mx={1} className='item'>
                                <ModalLogin />
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavbarTeste;