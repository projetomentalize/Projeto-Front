import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import Carrossel from "../../components/carrossel/Carrossel";
import NavbarTeste from "../../components/estaticos/navbarteste/NavbarTeste";
import Home2 from "../home2/Home2";
import './SobreNos.css'

function SobreNos() {
    return (
        <>
        <NavbarTeste/>
        <Home2/>
        <Carrossel/>
        </>
    );        
}
export default SobreNos;