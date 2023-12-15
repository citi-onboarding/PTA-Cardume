import React from "react";
import  Image from "next/image";
import { HomeContainer, Fundo, FaleConosco, Titulo, LinhaFaleConosco, Icones, Infos} from "./style";
import { LogoCardume, EmailIcon, FacebookIcon, InstagramIcon, WebsiteIcon, WhatsappIcon } from "../../assets";

export default function Footer(){
    return (
        <Fundo>
            <HomeContainer>
                <FaleConosco>
                    <Titulo>Fale conosco</Titulo>
                    <LinhaFaleConosco>
                        <Icones href= "https://citi.org.br/"><Image src={WhatsappIcon} alt = "WhatsappIcon"/></Icones><Infos>81 97339-6758</Infos>
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <Icones href= "https://citi.org.br/"><Image src={WebsiteIcon} alt = "WebsiteIcon"/></Icones><Infos>www.monitoresuamarca.com.br</Infos>
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <Icones href= "https://citi.org.br/"><Image src={EmailIcon} alt = "EmailIcon"/></Icones><Infos>cardumepi@gmail.com</Infos>
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <Icones href= "https://citi.org.br/"><Image src={InstagramIcon} alt = "InstagramIcon"/></Icones><Infos>@cardumemarcas</Infos>
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <Icones href= "https://citi.org.br/"><Image src={FacebookIcon} alt = "FacebookIcon"/></Icones><Infos>Cardume Propriedade Intelectual</Infos>
                    </LinhaFaleConosco>
                </FaleConosco>
                
                <Image src={LogoCardume} alt = "LogoCardume" style={{width: "325px", height: "252px", marginLeft: "200px", marginRight: "557px", marginTop:"250px", display: "flex"}}/>

            </HomeContainer>
        </Fundo>
            
     );
}
