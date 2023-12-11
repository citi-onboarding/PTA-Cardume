import styled from 'styled-components';

export const Container = styled.section`
  width: 1440px;
  height: 584px;
  background: linear-gradient(180deg, #4c2882 0%, #4c2882 100%);
  display: flex;
  align-items: center;
  left: -207px;
`;

export const TextContainer = styled.div`
  width: 630px;
  margin-right: auto;
  padding: 80.07px;
  margin-top: auto;
  padding-top: 80px;
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

export const Paragraph = styled.p`
  color: var(--White-Back, #fafafa);
  font-family: "Gotham Medium", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 32px;
`;

export const Checkout = styled.div`
  width: 610px;
  height: 244px;
  position: absolute;
  top: 120px;
  left: calc(630px + 82px + 40px);
  padding: 20px;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  vertical-align: middle;
`;
