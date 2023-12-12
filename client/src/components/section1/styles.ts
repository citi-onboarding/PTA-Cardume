import { constants } from 'fs/promises';
import styled from 'styled-components';
import { ImageDegrade } from 'assets';

export const Container = styled.section`
  width: 1440px;
  height: 584px;
  display: flex;
  align-items: center;
  background-image: url(${ImageDegrade.src});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TextContainer = styled.div`
  width: 630px;
  margin-right: auto;
  padding: 80.07px;
  padding-top: 15px;
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