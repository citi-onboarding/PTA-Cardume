import React from "react";
import { HomeContainer, Box, Titulo, Perguntas, Retangulo, Retangulo1, Retangulo2, Retangulo3, 
    RetanguloWrapper, Button} from "./style";
import localFont from 'next/font/local';
import { useState } from 'react';
import axios from 'axios';

const gothamMedium= localFont({
    src: "../../assets/gotham-medium/Gotham Medium Regular.ttf"
})


type ContactSectionProps = {
    id?: string;
  };

export default function Section4() {

    const [formData, setFormData] = useState({
        marca: '',
        ramo: '',
        nome: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };
    
      const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        try {
          const response = await axios.post('/api/sendMail', formData);
          console.log('Email sent:', response.data.message); 
          setFormData({
            marca: '',
            ramo: '',
            nome: '',
            email: '',
            phone: '',
            message: '',
          });
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };
    
    return (
            <HomeContainer id="contato">
                <Box onSubmit={handleSubmit} >
                    <Titulo>Tire suas dúvidas</Titulo>
                    <Perguntas>Qual o nome da sua marca?</Perguntas>
                    <Retangulo placeholder="Nome da sua marca" id="marca" value={formData.marca} onChange={handleChange} ></Retangulo>
                    <Perguntas>Qual seu ramo de atuação?</Perguntas>
                    <Retangulo placeholder="Seu ramo de atuação" id="ramo" value={formData.ramo} onChange={handleChange} ></Retangulo>
                    <Perguntas>Qual seu nome?</Perguntas>
                    <Retangulo placeholder="Seu nome" id="nome" value={formData.nome} onChange={handleChange} ></Retangulo>

                    <RetanguloWrapper>
                        <div>
                        <Perguntas>Telefone</Perguntas>
                        <Retangulo1 placeholder="(xx) xxxxx-xxxx" id="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                         <div><Perguntas style={{marginLeft:"-2%"}}>Email</Perguntas>
                        <Retangulo2 placeholder="exemplo@email.com" id="email" value={formData.email} onChange={handleChange} /> 
                        </div>
                    </RetanguloWrapper>
                    <Perguntas>Como podemos de ajudar?</Perguntas>
                    <Retangulo3 placeholder="Digite aqui..." id="message" value={formData.message} onChange={handleChange} ></Retangulo3>
                <Button className={gothamMedium.className} type="submit">
                        Enviar
                </Button> 
                </Box>
            </HomeContainer>
    );
  }