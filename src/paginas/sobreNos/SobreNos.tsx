import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import './SobreNos.css'

function SobreNos() {
    return (
        <Grid className='caixa1'>
            <Grid container direction='row' justifyContent='center' alignContent='center'>
                <Box className='txtdark'>
                    <Box paddingTop={1}>
                        <Typography variant="h6" align='center'> Missão</Typography>
                        <Typography variant="h6" align='center' gutterBottom > Conectar pessoas que precisam de apoio psicológico com profissionais da área dispostos a ajudar essas pessoas de forma gratuita. Nós promovemos saúde e bem estar para população brasileira.</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
export default SobreNos;
