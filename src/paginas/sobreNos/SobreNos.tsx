import { Divider, Typography } from "@material-ui/core";
import { AddBox } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";
import NavbarExterna from "../../components/estaticos/navbarexterna/NavbarExterna";
import './SobreNos.css'

        function SobreNos() {
            return (
                <>
           <NavbarExterna />
              <Grid container direction='row' justifyContent='center' alignContent='center'  className="container-sobrenos">
                    <Grid item text-align='center' xs={12}>
                            <Typography variant='h3' color='textPrimary' component='h3' align='center' className="titulo-aboutus">NOSSO DESAFIO ODS-3</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <img src='https://raw.githubusercontent.com/projetomentalize/midia/47c25cf7b4bc6f17f24b63a0cceec625be1b3b3f/Imagem1.svg' alt="" className="img-aboutus1" ></img>
                    </Grid>
                    <Grid item xs={6}>    
                       <Box>              
                            <Typography align="center" className="txt-home1">No projeto integrador da Generation Brasil nos foi proposto o desafio desenvolver uma solução (site ou e-commerce) para o "Obejetivo 3" dos 17 OSD(Objetivos de Desenvolvimento Sustentável) da ONU.</Typography>
                            <Typography align="center" className="txt-home1">O desafio do ODS3 é :
                            "Como será que podemos contribuir para garantir o acesso a saúde de
                            qualidade e/ou promover o bem-estar para todos, em todas as idades, em sua comunidade, cidade ou país?"</Typography>
                           <Typography align="center" className="txt-home1">
                           Escolhemos  criar uma rede social com o objetivo de atender a Meta 3.4 da OSD 3:
                           Até 2030, reduzir em um terço a mortalidade prematura por doenças não transmissíveis via prevenção e tratamento, promover a saúde mental e o bem-estar, a saúde do trabalhador e da trabalhadora, e prevenir o suicídio, alterando significativamente a tendência de aumento.</Typography>
                        </Box>
                    </Grid>
               </Grid>
               <Divider/>
               <Grid container direction='row' justifyContent='center' alignContent='center' className="container-contato">
                    <Box text-align='center'>
                        <img src='https://raw.githubusercontent.com/projetomentalize/midia/5326276f26c5657a2547bf7655e2fa45dbb9c106/2.svg' alt="" ></img>
                    </Box>
               </Grid>     
               <Divider />               
               <Grid container direction='row' justifyContent='center' alignContent='center' className="container-sobrenos" >
                    <Grid item text-align='center' xs={12}>
                            <Typography variant='h3' color='textPrimary' component='h3' align='center' className="titulo-aboutus">PROJETO</Typography>
                    </Grid>          
                    <Grid item xs={4}>
                        <Box px={18} >
                            <img src='https://raw.githubusercontent.com/projetomentalize/midia/083a2b09d0e5d5408c9ffa65c5a341c2ea0ed357/img2.svg' width={200} height={200} alt=""  ></img>
                        </Box>
                        <Box my={5}>
                            <Typography variant='h4' color='textPrimary' component='h4' align='center' className="titulo-aboutus">PROBLEMA</Typography>
                        </Box>
                        <Box mx={4}>
                            <Typography align="center" >
                            A falta de acesso de grande parte da população a saúde mental contribui para o aumento de casos de transtornos e doenças mentais sem tratamento adequado, elevando a taxa de mortalidade por suicídio. </Typography>
                        </Box> 
                    </Grid>  
                    <Grid item xs={4}>
                        <Box px={18} >
                            <img src='https://raw.githubusercontent.com/projetomentalize/midia/47c25cf7b4bc6f17f24b63a0cceec625be1b3b3f/Imagem3.svg'width={200} height={200} alt=""  ></img>
                        </Box>
                        <Box my={5}>
                            <Typography  variant='h4' color='textPrimary' component='h4' align='center' className="titulo-aboutus">SOLUÇÃO</Typography>
                        </Box>
                        <Box mx={4}>
                            <Typography align="center" >
                            Por isso criamos a rede social Mentalize que facilita e promove o acesso da população a profissionais especializados.</Typography>
                        </Box>     
                    </Grid>
                    <Grid item xs={4}>
                        <Box px={18} >
                            <img src='https://raw.githubusercontent.com/projetomentalize/midia/47c25cf7b4bc6f17f24b63a0cceec625be1b3b3f/Imagem4.svg'width={200} height={200} alt=""  ></img>
                        </Box>
                        <Box my={5}>
                            <Typography  variant='h4' color='textPrimary' component='h4' align='center' className="titulo-aboutus">IMPACTO NA SOCIEDADE</Typography>
                        </Box>
                        <Box mx={4}>
                            <Typography align="center" >
                            Conectamos pessoas que precisam de apoio psicológico com profissionais da área dispostos a ajudar essas pessoas de forma gratuita. promovendo saúde e bem estar para população brasileira.</Typography>
                        </Box>        
                    </Grid>                    
               </Grid>
                <Divider />
                <Grid container direction='column' justifyContent='center' alignContent='center' className="container-contato">              
                <Box text-align='center'>
                    <img src='https://raw.githubusercontent.com/projetomentalize/midia/5326276f26c5657a2547bf7655e2fa45dbb9c106/4.svg' alt="" ></img>
                </Box>                
                <Divider />
                </Grid>
                </>
            );  
        }     
    
export default SobreNos;
