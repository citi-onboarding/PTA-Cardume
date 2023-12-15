import React from "react";
import { HomeContainer, Box, Titulo, Perguntas, Retangulo, Retangulo1, Retangulo2, Retangulo3, 
    RetanguloWrapper, Contatos} from "./style";


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
                <Perguntas>Telefone</Perguntas>
            <RetanguloWrapper>
                    <Retangulo1 placeholder="(xx) xxxxx-xxxx"></Retangulo1> 
                    <Retangulo2 placeholder="exemplo@email.com"></Retangulo2>
            </RetanguloWrapper>
            
                <Perguntas>Como podemos de ajudar?</Perguntas>
                <Retangulo3 placeholder="Digite aqui..."></Retangulo3>
                
            </Box>
            </HomeContainer>
    );
  }