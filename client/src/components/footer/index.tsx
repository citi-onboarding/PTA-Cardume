import React from "react";
import  Image from "next/image";
import { HomeContainer, Fundo, FalesConosco, Titulo, LinhaFaleConosco, Icones } from "./style";
import { LogoCardume, EmailIcon, FacebookIcon, InstagramIcon, WebsiteIcon, WhatsappIcon } from "../../assets";

export default function Footer(){
    return (
        <Fundo>
            <HomeContainer>
                <FalesConosco>
                    <Titulo>Fale conosco</Titulo>
                    <LinhaFaleConosco>
                        <Icones href= "https://citi.org.br/"><Image src={WhatsappIcon} alt = "WhatsappIcon"/></Icones>
                        81 97339-6758
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <Icones href= "https://citi.org.br/"><Image src={WebsiteIcon} alt = "WebsiteIcon"/></Icones>
                        www.monitoresuamarca.com.br
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <Icones href= "https://citi.org.br/"><Image src={EmailIcon} alt = "EmailIcon"/></Icones>
                        cardumepi@gmail.com
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <Icones href= "https://citi.org.br/"><Image src={InstagramIcon} alt = "InstagramIcon"/></Icones>
                        @cardumemarcas
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <Icones href= "https://citi.org.br/"><Image src={FacebookIcon} alt = "FacebookIcon"/></Icones>
                        Cardume Propriedade Intelectual
                    </LinhaFaleConosco>
                </FalesConosco>
                
                <Image src={LogoCardume} alt = "LogoCardume" style={{width: "325px", height: "252px", marginLeft: "558px", marginRight: "557px", marginTop:"120px", display: "flex"}}/>

            </HomeContainer>
        </Fundo>
            
     );
}