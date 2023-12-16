import React from "react";
import { HomeContainer, Newul, Newli, NewLink, NewImage} from "./style";
import { NavLogo } from "../../assets";
import { Navbar } from "components";
//import Image from 'next/image';


export default function Home() {
  return (
      <HomeContainer>
        <Newul> 
          <Newli>
          <img src={NavLogo.src} alt="LogoCardume" style={{width: "305", height: "65", marginRight: "350px"}}/>
          </Newli>
          <Newli>
            <NewLink href= "#section1">Home</NewLink>
          </Newli>
          <Newli>
            <NewLink href= "#section2">Serviço</NewLink>
          </Newli>
          <Newli>
            <NewLink href= "https://citi.org.br/">Vantagens</NewLink>
            </Newli>
            <Newli>
            <NewLink href= "#footer">Contato</NewLink>
            </Newli>
        </Newul>
      </HomeContainer>
      
  );
}