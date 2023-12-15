import React from "react";
import { HomeContainer, Box, Titulo, Perguntas, Retangulo, Retangulo1, Retangulo2, Retangulo3, 
    RetanguloWrapper, Contatos, ImgBotao, Space1, Space2} from "./style";
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
                <Perguntas>Qual seu nome?</Perguntas>
                <Retangulo placeholder="Seu nome"></Retangulo>
                

                <RetanguloWrapper>
                    <Space1>
                        <Perguntas>Telefone</Perguntas>
                        <Retangulo1 placeholder="(xx) xxxxx-xxxx" />
                    </Space1>
                    <Space2>
                        <Perguntas>Email</Perguntas>
                        <Retangulo2 placeholder="exemplo@email.com" />
                    </Space2>
                </RetanguloWrapper>
                <Perguntas>Como podemos de ajudar?</Perguntas>
                <Retangulo3 placeholder="Digite aqui..."></Retangulo3>
               <button>
                <ImgBotao src={Botao.src} alt="botao_enviar"/>
               </button> 
            </Box>
            </HomeContainer>
    );
  }