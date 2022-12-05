import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './Contato.css'


function Contato() {
    return (
        <Grid container direction='row' justifyContent='center' alignContent='center' className='boxcontato'>
            <Box paddingX={10}>
                <form>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'>Entre em contato Conosco</Typography>
                    <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                    <TextField id='usuario' label='E-mail' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField id='assunto' label='Mensagem' variant='outlined' name='assunto' type='normal' margin='normal' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                        <Link to='/login' className='text-decorator-none'>
                            <Button variant='contained' color='secondary' className='btnCancelar'>
                                Cancelar
                            </Button>
                        </Link>
                            <Button type='submit' variant='contained' color='primary'>
                            Enviar
                            </Button>
                    </Box>
                </form>
            </Box>
        </Grid>
    )
}

export default Contato;