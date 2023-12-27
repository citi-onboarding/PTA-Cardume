import styled from "styled-components";
import { FundoSection2 } from "assets";


export const HomeContainer = styled.div`

background-color: #FAFAFA;
width: 100%;
min-height: 100vh;
flex-shrink: 0;
background-image: url(${FundoSection2.src});
background-size: cover;
background-position: 0px -200px;
padding-top: 40px;
position: relative;
display: flex;
flex-direction: row;
justify-content:center;
gap:5%;
align-items: center;
@media (max-width: 1024px) {
  width: 100%;
  flex-direction: column;
  height: 1700px;
  justify-content: flex-start;
  }
`;

export const Box = styled.form`
display: flex;
position: relative;
width: 630px;
padding: 24px;
z-index: 1;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
border-radius: 16px;
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
background-color: #d7d0e2;
box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);
@media (max-width: 1024px) {
  width: 80%; 
  margin-left: 0px;
  }
`;

export const SecondBox = styled.div`
display: flex;
width: 560px;
padding: 24px 16px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
border-radius: 16px;
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
background-color: #d7d0e2;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin-top: -10%;
@media (max-width: 1024px) {
  width: 80%; 
 }
`;

export const Titulo = styled.h2`
color: var(--Pure-Orange, #FF9100);
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 100% */
margin-bottom: 10px;
display: flex;
align-self: flex-start;
`;


export const TituloSec2 = styled.h2`
color: var(--Dark-Moderate-Violet, #4C2882);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 16px; 
`;

export const Texto = styled.p`
color: var(--Dark-Moderate-Violet, #4C2882);
text-align: justify;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Destaque = styled.span`
color: var(--Pure-Orange, #FF9100);
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

export const Perguntas = styled.a`
z-index: 1;
color: var(--Moderate-Violet, #713AC4);
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 100% */
margin-left: 18px;
align-self: flex-start;
@media (max-width: 1024px) {
align-self: center; 
margin-left: 0px;}
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -4%;
  gap:4%;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-left: 0px;
    gap: 3px;
  }
  `;

export const RetanguloWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const Retangulo = styled.input`
width: 550px;
height: 48px;
flex-shrink: 0;
border-radius: 16px;
font-weight: 400;
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
background: var(--White-Back, #FAFAFA);
padding: 10px;
font-size: 18px; /* Ajuste o tamanho da fonte conforme necessário */

&:focus {
  outline: none;
}
::placeholder {
  color: var(--Gray-3, #AAA);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
}
@media (max-width: 1024px) {
width: 50%;  }
`;


export const Retangulo1 = styled.input`
width: 210px;
height: 48px;
flex-shrink: 0;
border-radius: 16px;
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
margin-top: 4%;
background: var(--White-Back, #FAFAFA);
padding: 10px;
font-size: 18px; /* Ajuste o tamanho da fonte conforme necessário */

&:focus {
  outline: none;
}
::placeholder {
  color: var(--Gray-3, #AAA);
  /* Subtexto */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
}
@media (max-width: 1024px) {
width: 100%  }
margin-left: 0px;
margin-bottom: 2%;
`;


export const Retangulo2 = styled.input`
width: 324px;
height: 48px;
flex-shrink: 0;
border-radius: 16px;
margin-top: 3%;
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
background: var(--White-Back, #FAFAFA);
padding: 10px;
font-size: 18px; /* Ajuste o tamanho da fonte conforme necessário */
&:focus {
  outline: none;
}
@media (max-width: 1024px) {
  width: 100%;
  margin-left: 0px;  }
`;

export const Retangulo3 = styled.input`
width: 550px;
height: 96px;
flex-shrink: 0;
border-radius: 16px;
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
background: var(--White-Back, #FAFAFA);
padding: 10px;
font-size: 18px; /* Ajuste o tamanho da fonte conforme necessário */
&:focus {
  outline: none;
}
@media (max-width: 1024px) {
width: 50%;  }
`;

export const Button = styled.button`
display: flex;
padding: 16px 24px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 16px;
border: 1px solid var(--Dark-Moderate-Violet, #4C2882);
background-color: var(--White-Back, #FAFAFA);
margin-left: 430px;
color: var(--Dark-Moderate-Violet, #4C2882);
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 100% */
z-index: 1;
&:active {
    border-radius: 16px;
    border: 1px solid var(--White-Back, #FAFAFA);
    background: var(--Dark-Moderate-Violet, #4C2882);
    color: var(--White-Back, #FAFAFA);
  }
  @media (max-width: 1024px) {
    width: 50%; 
    gap: 0px;
    margin-left: 0px; }
`;
