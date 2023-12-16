import React from "react";
import { HomeContainer, Box, Titulo, Perguntas, Retangulo, Retangulo1, Retangulo2, Retangulo3, 
    RetanguloWrapper,  RetanguloWrapper1, Contatos, ImgBotao, Space1, Space2, Perguntas1, Button} from "./style";
    import { Botao } from "assets";

export default function Home() {
    return (
            <HomeContainer>
            <Box>
            
                <Titulo>Tire suas dúvidas</Titulo>
                <Perguntas>Qual o nome da sua marca?</Perguntas>
                <Retangulo placeholder="Nome da sua marca"></Retangulo>
                <Perguntas>Qual seu ramo de atuação?</Perguntas>
                <Retangulo placeholder="Seu ramo de atuação"></Retangulo>
                <Perguntas1>Qual seu nome?</Perguntas1>
                <Retangulo placeholder="Seu nome"></Retangulo>
                
               <RetanguloWrapper1>
                <Perguntas>Telefone</Perguntas>
                <Perguntas>Email</Perguntas>
                </RetanguloWrapper1>

                <RetanguloWrapper>
                    <Retangulo1 placeholder="(xx) xxxxx-xxxx" />  
                    
                    <Retangulo2 placeholder="exemplo@email.com" />
                   
                </RetanguloWrapper>
                <Perguntas>Como podemos de ajudar?</Perguntas>
                <Retangulo3 placeholder="Digite aqui..."></Retangulo3>
               <Button>
                <ImgBotao src={Botao.src} alt="botao_enviar"/>
               </Button> 
            </Box>
            </HomeContainer>
    );
  }