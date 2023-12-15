import styled from "styled-components";
import Image from 'next/image';

export const HomeContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Newul = styled.div` 
  width: 100%;
  height: 120px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #4C2882;
`;

export const Newli = styled.li`
//background-color: #fff;
list-style: none;
margin: 0 10px;
`;

export const NewLink = styled.a`
  text-decoration: none;
  color: var(--White-Back, #FAFAFA);
  font-family: 'Gotham Black', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #FF9100;
  }
`;


export const NewImage = styled(Image)`
width: 305px;
height: 65px;
flex-shrink: 0;
`;

