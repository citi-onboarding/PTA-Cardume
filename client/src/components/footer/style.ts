import { builtinModules } from "module";
import styled from "styled-components";
import Image from "next/image";
import { OndaFooter } from "assets";

export const Fundo = styled.div`
    height:563px;
    width: 100%;
    background-color: transparent;
    margin-top: -1.5%;
`;

export const HomeContainer = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${OndaFooter.src});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
`;

export const Titulo = styled.header`
    display: flex;
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
    margin-bottom: 500px;
    gap: 32px
`;


export const LinhaFaleConosco = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    height: 100%;
    width: 200%;
`;


export const Infos = styled.header`
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 16px;
`;


export const Creditos = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: -810px;
    margin-top: 525px;
    gap: 7px;
`;


export const TextoCreditos = styled.header`
    color: var(--White-Back, #FAFAFA);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;


  
  