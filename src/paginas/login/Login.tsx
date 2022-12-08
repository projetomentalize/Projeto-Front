import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../service/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            navigate('/home');
        }
    }, [token]);

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/auth/logar`, userLogin, setToken);

            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    return (
        <Grid container className='grid1'>
            <Grid container direction='column' justifyContent='center' alignItems='center'>
                <Box boxShadow={2} display='flex' justifyContent='center' marginTop={2} className='caixalogin'>
                    <Typography gutterBottom color='textPrimary' align='center' className='texto1'>Entrar</Typography>
                    <Box display='flex' justifyContent='center' >
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Informe o seu e-mail e senha para acessar sua conta:</Typography>
                        </Box>
                    </Box>
                    <form onSubmit={onSubmit} className='formlogin' >
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Endereço de e-mail' variant='outlined' name='usuario' margin='normal' fullWidth className='campos' />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='campos' />
                        <Box marginTop={5} textAlign='center'>
                            <Button type='submit' variant='contained' className='bttlogin'>
                                Login
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login