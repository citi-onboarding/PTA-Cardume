import { constants } from 'fs/promises';
import styled from 'styled-components';
import { FundoSection2, ImageDegrade } from 'assets';

export const Container = styled.section`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  justify-content: space-between;

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
  position: relative;
  margin-right: 5%;
`;

export const Subtitle = styled.span`
  color: var(--Pure-Orange, #FF9100);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  height: 20px;
  margin-bottom: 40px;
  color: #ff9100;
`;

export const TitleText = styled.h1`
  color: var(--White-Back, #FAFAFA);
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  white-space: nowrap; 
`;

export const Paragraph = styled.p`
  color: var(--White-Back, #FAFAFA);
  font-size: 20px;
  font-style: auto;
  font-weight: 400;
  line-height: 20px; 
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;

export const Checkout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -2.5%;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px; 
  vertical-align: middle;
`;

export const OrangeText = styled.span`
  font-size: 36px;
  font-weight: 600;
  line-height: 36px;
`;

export const Paragraph2 = styled.p`
  color: var(--White-Back, #FAFAFA);
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  white-space: nowrap; 
  `;

export const OrangeText2 = styled.span`
  color: var(--Pure-Orange, #FF9100);
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  `;

export const Container1 = styled.section`
  position: relative;
  height: 590px;
`;

export const Second = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -10%;
`;


export const TextBox = styled.div`
  color: var(--Black, #1C1C1C);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 6%;
`;

export const OrangeText3 = styled.span`
  color: var(--Pure-Orange, #FF9100);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
`;

export const PurpleText = styled.span`
  color: var(--Dark-Moderate-Violet, #4C2882);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap; 
`;
export const TextBox2 = styled.div`

  text-align: right;
  color: var(--Black, #1C1C1C);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;


export const Button = styled.button`
  margin-top: 15%;
  margin-left: 5%;
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

export const Side = styled.div`
  padding: 5% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const ButtonText = styled.span`
  color: var(--White-Back, #FAFAFA);
  width: 100%;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
`;

export const ShoppingCartIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const handleButtonClick = () => {
    window.open('https://pay.kiwify.com.br/AuReH8X', '_blank');  
  };