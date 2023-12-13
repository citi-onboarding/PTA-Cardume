import React from "react";
import { HomeContainer, Newul, Newli, NewLink, NewImage} from "./style";
import { LogoCardume } from "../../assets";
//import Image from 'next/image';


export default function Home() {
  return (
      <HomeContainer>
        <Newul> 
          <Newli>
          <img src={LogoCardume.src} alt="LogoCardume" style={{width: "305", height: "65", marginRight: "300px"}}/>
          </Newli>
          <Newli>
            <NewLink href= "https://citi.org.br/">Home</NewLink>
          </Newli>
          <Newli>
            <NewLink href= "https://citi.org.br/">Serviço</NewLink>
          </Newli>
          <Newli>
            <NewLink href= "https://citi.org.br/">Vantagens</NewLink>
            </Newli>
            <Newli>
            <NewLink href= "https://citi.org.br/">Contato</NewLink>
            </Newli>
        </Newul>
      </HomeContainer>
      
  );
}