import styled from "styled-components";

export const HomeContainer = styled.div`
width: 100%;
height: 1090px;
flex-shrink: 0;
flex-shrink: 0;
margin-top:12.8%;
background-color: var(--Dark-Moderate-Violet, #4C2882);
display: flex;
flex-direction: column;
align-items: center;
`;

export const StyledSlider = styled.div`
width: 80%;
height: 50%;
margin-top: 3%;
`;

export const Titulo = styled.h2`
color: var(--pure-orange-80, rgba(255, 145, 0, 0.80));
font-family: Gotham Black;
font-size: 36px;
font-style: normal;
font-weight: 900;
line-height: 36px; 
display: flex;
align-self: flex-start;
margin-left: 80px;
margin-top: 3%;
`;

export const Button = styled.button`
  width: 280px;
  height: 65px;
  display: flex;
  padding: 20px 26px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 2%;
  border-radius: 16px;
  border: 1px solid var(--Pure-Orange, #FF9100);
  background: var(--White-Back, #FAFAFA);
  cursor: pointer;
  transition: box-shadow 0.1s ease; 
  color: var(--Pure-Orange, #FF9100);
  font-family: 'Gotham Medium', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); 
  }
`;

export const Servico = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 40px;
margin: 3% 0;
`;

export const Topicos = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;  
`;

export const Carrossel = styled.div`
display: flex;
flex-direction: column;
align-items: center;  
`;

export const Descricao = styled.p`
width: 200px;
color: var(--White-Back, #FAFAFA);
text-align: center;
font-family: Gotham Medium;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 100% */
`;

export const Infos = styled.p`
width: 300px;
color: var(--White-Back, #FAFAFA);
text-align: center;
font-family: Gotham Medium;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 20px;
`;
export const Subtitle = styled.p`
color: var(--Pure-Orange, #FF9100);
font-family: Gotham Medium;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 20px;
text-align: center;

`;
export const Destaque = styled.span`
color: var(--Pure-Orange, #FF9100);
text-align: center;
font-family: Gotham Black;
font-size: 20px;
font-style: normal;
font-weight: 900;
line-height: 20px; /* 100% */
`;

export const handleButtonClick = () => {
    window.open('https://pay.kiwify.com.br/AuReH8X', '_blank');  
  };