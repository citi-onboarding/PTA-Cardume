import React from "react";
import { HomeContainer, Box, Titulo, Perguntas, Retangulo, Retangulo1, Retangulo2, Retangulo3, Wrapper,
    RetanguloWrapper, Button, SecondBox, TituloSec2, Destaque, Texto} from "./style";
import { useState } from 'react';
import axios from 'axios';


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
    
      const isFormValid = () => {
        return (
            formData.marca.trim() !== '' &&
            formData.ramo.trim() !== '' &&
            formData.nome.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.phone.trim() !== '' &&
            formData.message.trim() !== ''
        );
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!isFormValid()) {
            alert("Por favor, preencha todos os campos do formulário.");
            return;
        }

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
            <HomeContainer id="section4">
                <Box onSubmit={handleSubmit} >
                    <Titulo>Tire suas dúvidas</Titulo>
                    <Perguntas>Qual o nome da sua marca?</Perguntas>
                    <Retangulo placeholder="Nome da sua marca" id="marca" value={formData.marca} onChange={handleChange} ></Retangulo>
                    <Perguntas>Qual seu ramo de atuação?</Perguntas>
                    <Retangulo placeholder="Seu ramo de atuação" id="ramo" value={formData.ramo} onChange={handleChange} ></Retangulo>
                    <Perguntas>Qual seu nome?</Perguntas>
                    <Retangulo placeholder="Seu nome" id="nome" value={formData.nome} onChange={handleChange} ></Retangulo>
                    <Wrapper>
                       <RetanguloWrapper>
                        <Perguntas>Telefone</Perguntas>
                        <Retangulo1 placeholder="(xx) xxxxx-xxxx" id="phone" value={formData.phone} onChange={handleChange} />
                        </RetanguloWrapper>
                         <RetanguloWrapper><Perguntas style={{marginLeft:"-2%"}}>Email</Perguntas>
                        <Retangulo2 placeholder="exemplo@email.com" id="email" value={formData.email} onChange={handleChange} /> 
                        </RetanguloWrapper>
                    </Wrapper>
                    <Perguntas>Como podemos te ajudar?</Perguntas>
                    <Retangulo3 placeholder="Digite aqui..." id="message" value={formData.message} onChange={handleChange} ></Retangulo3>
                <Button  type="submit">
                        Enviar
                </Button> 
                </Box>
                <SecondBox >
                  <TituloSec2>Condições de uso do serviço</TituloSec2>
                  <Texto >Os planos de acompanhamento de marcas são serviços oferecidos aos titulares 
                  de processos de registro de marca no INPI (em tramitação ou concedidos) e 
                  incluem: (a) Configuração dos processos em nossos sistemas; (b) 
                  Monitoramento 24 horas por dia e 7 dias por semana; (c) Atualização semanal da 
                  RPI (Revista da Propriedade Industrial); (d) Notificações por e-mail sempre que 
                  houver qualquer movimentação em seu pedido de registro.
                  </Texto>
                  <Texto><Destaque>Os planos não incluem:</Destaque> (e) acompanhamento de processos de terceiros; (f) 
                  taxas do INPI; (g) manifestações, recursos ou oposições (que podem ser orçados 
                  separadamente); (h) representação do titular da marca junto ao INPI.
                  Os modelos de planos e respectivos valores estão sujeitos à alteração sem aviso prévio.
                  </Texto>
                <Texto><Destaque>Forma de pagamento:</Destaque> o plano mensal é pago de forma recorrente (cartão de 
                crédito). O plano anual é pago à vista (boleto ou pix). O cliente poderá optar 
                pela renovação automática ou não do plano anual.Política de cancelamentos: o 
                plano mensal pode ser cancelado em até 10 dias antes do pagamento do 
                respectivo mês. O plano anual pode ser cancelado em até 30 dias após a 
                contratação. Passado este período, o contratante assume a responsabilidade de 
                pagamento pelo período contratado.
                </Texto>
                <Texto>
                Quaisquer dúvidas sobre os planos, forma de pagamento ou mesmo outro tipo 
                de necessidade em monitorar processos de registro de marcas, entre em contato 
                conosco pelo número  <Destaque>(81) 9.7339-6758.</Destaque> 
                </Texto>
                </SecondBox>
            </HomeContainer>
    );
  }