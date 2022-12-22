import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ModalLogin from '../../login/modalLogin/ModalLogin';
import './NavbarExterna.css'

function NavbarExterna() {
    return (
        <>
            <AppBar position="fixed" className='navbar'>
                <Toolbar className='fundo' variant="dense" >
                    <Link to="/home2">
                    <Box className='logo' >
                        <img src="https://raw.githubusercontent.com/projetomentalize/midia/5b75364a92009a3098609fe8fa0b46298edb1dc1/logosf.svg" alt='logoMentalize' />
                    </Box>
                    </Link>
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
                          <Link to="/cadastrousuario">
                          <Typography className='texto' variant="h6" color="inherit">
                            Cadastro
                          </Typography>
                          </Link>
                        </Box>
                        <Box mx={1} ml={73} className='item'>
                                <ModalLogin />
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavbarExterna;
