import React from "react";
import  Image from "next/image";
import { HomeContainer, Fundo, FaleConosco, Titulo, LinhaFaleConosco, Infos, Creditos, TextoCreditos} from "./style";
import { LogoCardume, EmailIcon, FacebookIcon, InstagramIcon, WebsiteIcon, WhatsappIcon, LogoCiti, Heart} from "../../assets";

export default function Footer(){
    return (
        <Fundo>
            <HomeContainer>
                
                <FaleConosco>
                    <Titulo>Fale conosco</Titulo>
                    <LinhaFaleConosco>
                        <a href= "https://citi.org.br/"><Image src={WhatsappIcon} alt = "WhatsappIcon"/></a><Infos>81 97339-6758</Infos>
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <a href= "https://citi.org.br/"><Image src={WebsiteIcon} alt = "WebsiteIcon"/></a><Infos>www.monitoresuamarca.com.br</Infos>
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <a href= "https://citi.org.br/"><Image src={EmailIcon} alt = "EmailIcon"/></a><Infos>cardumepi@gmail.com</Infos>
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <a href= "https://citi.org.br/"><Image src={InstagramIcon} alt = "InstagramIcon"/></a><Infos>@cardumemarcas</Infos>
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <a href= "https://citi.org.br/"><Image src={FacebookIcon} alt = "FacebookIcon"/></a><Infos>Cardume Propriedade Intelectual</Infos>
                    </LinhaFaleConosco>
                </FaleConosco>
                
                <Image src={LogoCardume} alt = "LogoCardume" style={{width: "276.25px", height: "214.2px", marginLeft: "150px", marginRight: "557px", marginTop:"245px", display: "flex"}}/>
                <Creditos>
                    <TextoCreditos>Made with &lt;/&gt; and  </TextoCreditos>
                    <Image src={Heart} alt = "Heart" style={{marginTop: "6px"}}/>
                    <TextoCreditos> by</TextoCreditos>
                    <Image src={LogoCiti} alt = "LogoCiti" style={{marginTop: "5px"}}/>
                </Creditos>

            </HomeContainer>
        </Fundo>
            
     );
}
