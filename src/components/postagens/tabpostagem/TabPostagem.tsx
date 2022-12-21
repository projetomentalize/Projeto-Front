import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
          <p>No projeto integrador da Generation brasil nos foi proposto o desafio desenvolver uma função (site ou e-commerce) para o "objetivo 3" dos 17 osd ( objetivos de desenvolvimento sustentável) da onu.</p>
          <p>o desafio do ods-3 é:</p>
          <p>"como será que podemos contribuir para garantir o acesso a saúde de qualidade e/ou promover o bem-estar para todos, em todas as idades, em sua comunidade, cidade ou país?"</p>
          <p>escolhemos criar uma rede social com o objetivo de atender a meta 3.4 do osd-3:</p>
          <p>até 2030, reduzir em um terço a mortalidade prematura por doenças não transmissíveis via prevenção e tratamento, promover a saúde mental e o bem-estar, a saúde do trabalhador e da trabalhadora, e prevenir o suicídio, alterando significativamente a tendência de aumento.</p></Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
