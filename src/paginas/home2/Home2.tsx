import { Grid, Box, Typography, Button, MenuItem, TextField, TextareaAutosize } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import React, { } from "react";
import NavbarTeste from "../../components/estaticos/navbarteste/NavbarTeste";
import './Home2.css'

function Home2() {
    return (
        <>
            <NavbarTeste />
            <Grid container className='caixa1-about'>
                <Grid container direction='row' justifyContent='center' alignContent='center'>
                    <Box className='txtdark'>
                        <Box>
                            <Typography variant="h6" align='center'> Missão</Typography>
                            <Typography variant="h6" align='center' gutterBottom > Conectar pessoas que precisam de apoio psicológico com profissionais da área dispostos a ajudar essas pessoas de forma gratuita. Nós promovemos saúde e bem estar para população brasileira.</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" align='center'> Missão</Typography>
                            <Typography variant="h6" align='center' gutterBottom > Conectar pessoas que precisam de apoio psicológico com profissionais da área dispostos a ajudar essas pessoas de forma gratuita. Nós promovemos saúde e bem estar para população brasileira.</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Divider/>
            <Grid container direction='column' justifyContent='center' alignContent='center' className="container-contato">
                <Box text-align='center'>
                     <Typography variant='h5' color='textPrimary' component='h5' align='center' className="titulo-contato">CONTATE-NOS</Typography>
                </Box>
                <Box >                    
                </Box>
            </Grid>
            <Divider/>
            <Grid container direction='column' justifyContent='center' alignContent='center' className="container-contato1">
                <Box text-align='center'>
                     <Typography variant='h5' color='textPrimary' component='h5' align='center' className="titulo-contato">CONTATE-NOS</Typography>
                </Box>
                <Box paddingX={1}  boxShadow={2} className='box-contato'>                    
                    <form  className='form-contato'>
                        <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' className="campos" size='small' fullWidth />
                        <TextField id='usuario' label='E-mail' variant='outlined' name='usuario' margin='normal' className="campos" size='small' fullWidth />
                        <TextareaAutosize id='mensagem' aria-label='Mensagem' aria-variant='outlined' name='mensagem' aria-margin='normal' defaultValue='Deixe aqui sua mensagem. Será um prazer atendê-lo.;)' className='txt-area'/>
                        <TextField id="select" label='Categoria' variant='outlined' name='categoria' margin='normal' className="campos" size='small' fullWidth select>
                            <MenuItem value="duvidas">Dúvidas</MenuItem>
                            <MenuItem value="sugestoes">Sugestões</MenuItem>
                        </TextField>
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary' className='btnCadastrar'>
                                Enviar
                            </Button>
                        </Box> 
                    </form>
                </Box>
            </Grid>
        </>
    );
}
export default Home2;