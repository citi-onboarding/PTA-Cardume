import { builtinModules } from "module";
import styled from "styled-components";
import  Image from "next/image";
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
    display: flex;
    font-size: 20px;
    font-weight: 900;
    line-height: 20px;
`;

export const FalesConosco = styled.div`
    display: flex;
    width: 800px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-left: 80px;
    margin-top: 250px;
  
`;

export const LinhaFaleConosco = styled.div`
    flex-direction: row;
    align-items: left;
    gap: 16px;
    height: 100%;
    width: 100%;
`;

export const Icones = styled.a`
    height: 50%;
    width: 50%;
`;


  
  
