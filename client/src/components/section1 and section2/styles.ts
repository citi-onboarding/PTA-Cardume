import { constants } from 'fs/promises';
import styled from 'styled-components';
import { FundoSection2, ImageDegrade } from 'assets';

export const Container = styled.section`
  width: 1440px;
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
  margin-left: 80.07px; 
  margin-top: 180px; 
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
  width: 552px;
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
  line-height: 20px; /* 100% */
  margin-bottom: 32px;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export const Checkout = styled.div`
  display: flex;
  width: 610px;
  flex-direction: column;
  align-items: flex-start;
  gap: auto;
  height: 244px;
  position: absolute;
  top: 90px;
  left: calc(630px + 82px + 40px);
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
  width: 1440px;
  height: 580px;
`;


export const TextBox = styled.div`
  position: absolute;
  width: 630px;
  right: 738px; 
  top: 520px; 
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
  width: 630px;
  right: 80px; 
  top: 360px;
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
  top: 770px;
  right: 208px;
  width: 374px;
  height: 88px;
  display: flex;
  padding: 24px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid var(--White-Back, #FAFAFA);
  background: var(--Dark-Moderate-Violet, #4C2882);
  cursor: pointer;

  &:hover {
    background-color: #FF9100;
  }
`;

export const ButtonText = styled.span`
  color: var(--White-Back, #FAFAFA);
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
    window.location.href = 'https://citi.org.br/';
  };