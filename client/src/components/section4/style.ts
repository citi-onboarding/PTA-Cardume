import styled from "styled-components";
import { Textura } from "assets";


export const HomeContainer = styled.div`

background-color: #fff;
width: 100%;
height: 1078px;
flex-shrink: 0;

background-image: url(${Textura.src});
//background-repeat: no-repeat;
//background-size: contain;
background-size: cover;
background-position: 0px -500px;
   
`;

export const Box = styled.section`

display: flex;
width: 630px;
height: 752px;
padding: 24px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
flex-shrink: 0;
margin-left: 80px;
margin-top: 55px;

border-radius: 16px;
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
background-color: #d7d0e2;


/* Drop shadow */
box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);
z-index: 0;

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

margin-right: 280px;

`;

export const Perguntas = styled.a`
color: var(--Moderate-Violet, #713AC4);

/* Corpo texto* */
font-family: Gotham Black;
font-size: 20px;
font-style: normal;
font-weight: 900;
line-height: 20px; /* 100% */
margin-left: 0;
margin-right: 200px;
// margin-bottom: 500px;
`;
export const RetanguloWrapper = styled.div`
  display: flex;
  gap: -20px;
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
background: var(--White-Back, #FAFAFA);
padding: 10px; /* Adicionando espaço interno ao input */
font-size: 18px; /* Ajuste o tamanho da fonte conforme necessário */

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
border: 1px solid var(--pure-orange-40, rgba(255, 145, 0, 0.40));
background: var(--White-Back, #FAFAFA);
padding: 10px; /* Adicionando espaço interno ao input */
font-size: 18px; /* Ajuste o tamanho da fonte conforme necessário */
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
`;

export const Contatos = styled.div`
display: flex;
width: 325px;
height: 184px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
margin-left: 80px;
background-color: #4C2882;
margin-bottom: 132px;
z-index: 1;
`;

export const Botao = styled.button`
display: flex;
padding: 16px 24px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 16px;
border: 1px solid var(--Dark-Moderate-Violet, #4C2882);
background-color: var(--White-Back, #FAFAFA);
`;

export const ImgBotao = styled.img`
width: 112px;
height: 52px;

`;

export const Space1 = styled.div`
margin-left: 60px;
`;

export const Space2 = styled.div`
margin-: 0px;
`;