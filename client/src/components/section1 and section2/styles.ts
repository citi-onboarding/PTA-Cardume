import { constants } from 'fs/promises';
import styled from 'styled-components';
import { FundoSection2, ImageDegrade } from 'assets';

export const Container = styled.section`
  width: 100%;
  height: 995px;
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 174px;
    left: 0;
    background-image: url(${FundoSection2.src});
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: -1; 
  }

  background-image: url(${ImageDegrade.src});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left:4%; 
  margin-top: 8%; 
  position: relative;
`;

export const Subtitle = styled.span`
  color: var(--Pure-Orange, #FF9100);
  font-family: 'Gotham Black', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px;
`;

export const Header = styled.div`
  font-family: "Gotham Black", sans-serif;
  font-size: 20px;
  font-weight: 900;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  height: 20px;
  margin-bottom: 40px;
  color: #ff9100;
`;

export const TitleText = styled.h1`
  color: var(--White-Back, #FAFAFA);
  font-family: 'Gotham Medium', sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 36px;
  white-space: nowrap; 
`;

export const Paragraph = styled.p`
  color: var(--White-Back, #FAFAFA);
  font-family: 'Gotham Medium', sans-serif;
  font-size: 20px;
  font-style: auto;
  font-weight: 500;
  line-height: 20px; 
  margin-bottom: 32px;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: auto;
  height: 244px;
  position: absolute;
  top: 90px;
  margin-top: -2.5%;
  left: 730px;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px; 
  vertical-align: middle;
`;

export const OrangeText = styled.span`
  color: var(--Pure-Orange, #FF9100);
  font-family: 'Gotham Black', sans-serif;
  font-size: 36px;
  font-weight: 900;
  line-height: 36px;
`;

export const Paragraph2 = styled.p`
  color: var(--White-Back, #FAFAFA);
  font-family: 'Gotham Medium', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap; 
  `;
export const OrangeText2 = styled.span`
  color: var(--Pure-Orange, #FF9100);
  font-family: 'Gotham Black', sans-serif;
  font-size: 24px;
  font-weight: 900;
  line-height: 24px;
  `;

  export const Container1 = styled.section`
  position: relative;
  height: 580px;
`;


export const TextBox = styled.div`
  position: absolute;
  width: 650px;
  right: 648px; 
  top: 480px; 
  color: var(--Black, #1C1C1C);
  font-family: Gotham Medium, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const OrangeText3 = styled.span`
  color: var(--Pure-Orange, #FF9100);
  font-family: Gotham Black, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px;
  white-space: nowrap;
`;

export const PurpleText = styled.span`
  color: var(--Dark-Moderate-Violet, #4C2882);
  font-family: Gotham Black, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px;
  white-space: nowrap; 
`;
export const TextBox2 = styled.div`
  position: absolute;
  width: 650px;
  right: 50px; 
  top: 320px;
  text-align: right;
  color: var(--Black, #1C1C1C);
  font-family: Gotham Medium, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;


export const Button = styled.button`
  position: absolute;
  top: 690px;
  right: 145px;
  width: 380px;
  height: 85px;
  display: flex;
  padding: 24px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid var(--White-Back, #FAFAFA);
  background: var(--Dark-Moderate-Violet, #4C2882);
  cursor: pointer;
  transition: box-shadow 0.1s ease; 

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); 
  }
`;

export const ButtonText = styled.span`
  color: var(--White-Back, #FAFAFA);
  width: 100%;
  font-family: 'Gotham Medium', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
`;

export const ShoppingCartIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const handleButtonClick = () => {
    window.open('https://pay.kiwify.com.br/AuReH8X', '_blank');  
  };