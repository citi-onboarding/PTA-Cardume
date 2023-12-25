import styled from "styled-components";
import { Textura } from "assets";


export const HomeContainer = styled.div`

background-color: #fff;
width: 100%;
flex-shrink: 0;
background-image: url(${Textura.src});
background-size: cover;
background-position: 0px -500px;
margin-bottom: -14.8%;
padding-top: 40px;
position: relative;

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
margin-left: 80px;
border-radius: 16px;
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
background-color: #d7d0e2;
box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);
`;

export const Titulo = styled.h2`
color: var(--Pure-Orange, #FF9100);
/* Subtítulo* */
font-family: Gotham Black;
font-size: 24px;
font-style: normal;
font-weight: 900;
line-height: 24px; /* 100% */
margin-bottom: 10px;
display: flex;
align-self: flex-start;
`;

export const Perguntas = styled.a`
z-index: 1;
color: var(--Moderate-Violet, #713AC4);
font-family: Gotham Black;
font-size: 20px;
font-style: normal;
font-weight: 900;
line-height: 20px; /* 100% */
margin-left: 18px;
align-self: flex-start;
`;

export const RetanguloWrapper = styled.div`
  display: flex;
`;


export const Retangulo = styled.input`
width: 550px;
height: 48px;
flex-shrink: 0;
border-radius: 16px;
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
background: var(--White-Back, #FAFAFA);
padding: 10px; /* Adicionando espaço interno ao input */
font-size: 18px; /* Ajuste o tamanho da fonte conforme necessário */

&:focus {
  outline: none;
}
::placeholder {
  color: var(--Gray-3, #AAA);
  /* Subtexto */
  font-family: Gotham Medium;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
}
`;


export const Retangulo1 = styled.input`
width: 210px;
height: 48px;
flex-shrink: 0;
border-radius: 16px;
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
margin-left: 5%;
margin-top: 4%;
background: var(--White-Back, #FAFAFA);
padding: 10px; /* Adicionando espaço interno ao input */
font-size: 18px; /* Ajuste o tamanho da fonte conforme necessário */

&:focus {
  outline: none;
}
::placeholder {
  color: var(--Gray-3, #AAA);
  /* Subtexto */
  font-family: Gotham Medium;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
}
`;


export const Retangulo2 = styled.input`
width: 324px;
height: 48px;
flex-shrink: 0;
border-radius: 16px;
margin-left: -5%;
margin-top: 4%;
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
background: var(--White-Back, #FAFAFA);
padding: 10px; /* Adicionando espaço interno ao input */
font-size: 18px; /* Ajuste o tamanho da fonte conforme necessário */
&:focus {
  outline: none;
}
`;

export const Retangulo3 = styled.input`
width: 550px;
height: 96px;
flex-shrink: 0;
border-radius: 16px;
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
background: var(--White-Back, #FAFAFA);
padding: 10px; /* Adicionando espaço interno ao input */
font-size: 18px; /* Ajuste o tamanho da fonte conforme necessário */
&:focus {
  outline: none;
}
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
font-family: Gotham Medium;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 100% */
z-index: 1;
`;
