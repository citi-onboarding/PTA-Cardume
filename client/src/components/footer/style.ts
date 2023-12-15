import { builtinModules } from "module";
import styled from "styled-components";
import Image from "next/image";
import { OndaFooter } from "assets";


export const Fundo = styled.div`
    height: 100%;
    width: 100%;
    background-color: #FEFEFE;
`;

export const HomeContainer = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${OndaFooter.src});
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat;
    display: flex;
`;

export const Titulo = styled.header`
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 20px;
`;

export const FaleConosco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 60px;
    margin-top: 250px;
  
`;

export const LinhaFaleConosco = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    height: 100%;
    width: 100%;
`;


export const Icones = styled.a`

`;

export const Infos = styled.header`
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 16px;
`;




  
  