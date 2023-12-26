import React from "react";
import  Image from "next/image";
import { HomeContainer, Fundo, FaleConosco, Titulo, LinhaFaleConosco, Infos, Creditos, TextoCreditos} from "./style";
import { LogoCardume, EmailIcon, FacebookIcon, InstagramIcon, WebsiteIcon, WhatsappIcon, LogoCiti, Heart} from "../../assets";

export default function Footer(){
    return (
        <Fundo id="footer">
            <HomeContainer>
                <FaleConosco>
                    <Titulo>Fale conosco</Titulo>
                    <LinhaFaleConosco>
                        <a href="https://wa.me/5581973396758" target="_blank"><Image src={WhatsappIcon} alt = "WhatsappIcon"/></a><Infos>81 97339-6758</Infos>
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <a href= "http://www.monitoresuamarca.com.br/" target="_blank"><Image src={WebsiteIcon} alt = "WebsiteIcon"/></a><Infos>www.monitoresuamarca.com.br</Infos>
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <a href="mailto:cardumepi@gmail.com" target="_blank"><Image src={EmailIcon} alt = "EmailIcon"/></a><Infos>cardumepi@gmail.com</Infos>
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <a href= "https://www.instagram.com/cardumemarcas/" target="_blank"><Image src={InstagramIcon} alt = "InstagramIcon"/></a><Infos>@cardumemarcas</Infos>
                    </LinhaFaleConosco>
                    <LinhaFaleConosco>
                        <a href= "https://www.facebook.com/people/Cardume-Propriedade-Intelectual/pfbid02E9xNzhLocfdMR2TyH2Bt2FpK6yvzdweTu7Fuf5B1i73pqRjBM9mi6dE6xbDKfJ6l/?locale=pt_BR" target="_blank"><Image src={FacebookIcon} alt = "FacebookIcon"/></a><Infos>Cardume Propriedade Intelectual</Infos>
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
