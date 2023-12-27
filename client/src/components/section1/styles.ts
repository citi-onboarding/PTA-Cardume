import { constants } from 'fs/promises';
import styled from 'styled-components';
import { ImageDegrade } from 'assets';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: 580px;
  z-index: 2; 
  background-image: url(${ImageDegrade.src});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1024px) {
    height: 920px;
    width: 100%;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Subtitle = styled.span`
  color: var(--Pure-Orange, #FF9100);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
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
  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const TitleText = styled.h1`
  color: var(--White-Back, #FAFAFA);
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  white-space: nowrap; 
  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

export const Paragraph = styled.p`
  color: var(--White-Back, #FAFAFA);
  font-size: 20px;
  font-weight: 400;
  line-height: 20px; 
  margin-bottom: 32px;
  width: 105%;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    font-size: 16px;
    width: 80%;
  }
`;

export const Checkout = styled.div`
  display: flex;
  width: 100%;
  margin-left: 2%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -2.5%;
  box-sizing: border-box;
  @media (max-width: 1024px) {
  margin-top: 5%;  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px; 
  vertical-align: middle;
  @media (max-width: 1024px) {
    margin-right: 0;
  }
`;

export const OrangeText = styled.span`
  color: var(--Pure-Orange, #FF9100);
  font-size: 36px;
  font-weight: 600;
  line-height: 36px;
  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

export const Paragraph2 = styled.p`
  color: var(--White-Back, #FAFAFA);
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  white-space: nowrap; 
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  `;

export const OrangeText2 = styled.span`
  color: var(--Pure-Orange, #FF9100);
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  @media (max-width: 1024px) {
    font-size: 20px;
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
    gap: 5%;
    align-items: center;
    justify-content: center;
    width: 80%;
}
`;

