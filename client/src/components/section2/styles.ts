import { constants } from 'fs/promises';
import styled from 'styled-components';
import { FundoSection2 } from 'assets';

export const Container1 = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  background-image: url(${FundoSection2.src});
  background-color: #FAFAFA;
  background-size: cover;
  background-position: 0px -200px;
  padding-top: 14%;
  margin-top: -22%;
  @media (max-width: 1024px) {
    height: 900px; 
    justify-content: center; }
`;

export const TextBox = styled.div`
  color: var(--Black, #1C1C1C);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 8%;
  @media (max-width: 1024px) {
    margin-top: 5%;
    font-size: 20px;
  }
`;

export const Second = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8%;
`;

export const OrangeText3 = styled.span`
  color: var(--Pure-Orange, #FF9100);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  white-space: nowrap;
  @media (max-width: 1024px) {
    font-size: 20px;  }
`;

export const PurpleText = styled.span`
  color: var(--Dark-Moderate-Violet, #4C2882);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  white-space: nowrap; 
  @media (max-width: 1024px) {
    font-size: 20px;  }
`;
export const TextBox2 = styled.div`

  text-align: right;
  color: var(--Black, #1C1C1C);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media (max-width: 1024px) {
    text-align: left;
    margin-top: 5%;
    font-size: 20px;
  }
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
  @media (max-width: 1024px) {
    margin-top: 5%;
    width: 350px;
    height: 70px;
  }
`;

export const Side = styled.div`
  padding: 5% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;


export const ButtonText = styled.span`
  color: var(--White-Back, #FAFAFA);
  width: 100%;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  @media (max-width: 1024px) {
    font-size: 30px;  }
`;

export const ShoppingCartIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const handleButtonClick = () => {
    window.open('https://pay.kiwify.com.br/AuReH8X', '_blank');  
  };


