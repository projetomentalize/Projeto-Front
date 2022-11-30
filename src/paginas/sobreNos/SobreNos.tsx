import { Grid } from "@material-ui/core";
import React from "react";
import './SobreNos.css'

function SobreNos() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignContent='center'>
                <h1>Mentalize</h1>
            </Grid>
            <Grid>
                <h3>Objetivo</h3>
                <p>Conectar pessoas que precisam de apoio
                psicológico com profissionais da área
                dispostos a ajudar essas pessoas de forma
                gratuita.

                Nós promovemos saúde e bem estar para
                população brasileira.</p>
            </Grid>
            <Grid>
                <h3>Motivo</h3>
                <p>Existe um estigma muito forte com saude mental. Muitas pessoas acham que é so frescura outras acham que é tudo uma mentira. Por causa desse estigma uma grande quantidade de pessoas ainda tem vergonha ou um certo pensamento de que não valhe a pena ir em busca de melhorar sua propria saude mental o que em muitos casos pode levar a depressão ou até mesmo o suicidio. Então fizemos essa rede-social para ajudar tanto as pessoas que ja tem um conhecimento sobre saude mental tanto quanto as pessoas que ainda tem um estigma sonbre esse assunto </p>
            </Grid>
        </>
    );

export default SobreNos;