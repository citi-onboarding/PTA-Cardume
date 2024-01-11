import React from 'react';
import { CarroCompras2, Update, Notification, Checking, Instructions, Settings, 
 PreviousArrow, NextArrow}  from "assets";
import Image from 'next/image';
import Slider from 'react-slick';
import {Item1, Item2, Item3, Item4, Item5, Item6} from './carrossel';
import { HomeContainer, Titulo, Button, Servico, handleButtonClick, Descricao, Topicos, Subtitle, Destaque, StyledSlider} from "./style";


function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return (
        <Image src={NextArrow} alt="Atualização" className={className} onClick={onClick} />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return (
        <Image src={PreviousArrow} alt="Atualização" className={className} onClick={onClick} />
    );
  }
export default function Section3() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,   
        centerPadding: '0',    
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,                
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,                
              }
            }
          ]
      };
    return (
        <HomeContainer id='section3' >
           <Titulo>Quais são as vantagens de contratar esse serviço?</Titulo> 
            <StyledSlider>
            <Slider {...settings}>
                <Item1 />
                <Item2 />
                <Item3 />
                <Item4 />
                <Item5 />
                <Item6 />
            </Slider></StyledSlider>
            <Titulo >E como funciona esse serviço?</Titulo> 
            <Servico>
                <Topicos>
                <Image src={Instructions} alt="Atualização" />
               <Descricao>Após a contratação você receberá um e-mail com instruções simples</Descricao>
                </Topicos> 
                <Topicos>
                <Image src={Settings} alt="Atualização" />
               <Descricao>Seu processo será configurado em nossa base de dados</Descricao>
                </Topicos>
                 <Topicos>
                <Image src={Checking} alt="Atualização" />
               <Descricao>Iniciaremos o monitoramento 24 horas por dia e 7 dias por semana</Descricao>
                </Topicos>
                <Topicos>
                <Image src={Update} alt="Atualização" />
               <Descricao>Atualização semanal da RPI (Revista da Propriedade Industrial)</Descricao>
                </Topicos>
                 <Topicos>
                <Image src={Notification} alt="Atualização" />
               <Descricao>Avisaremos por e-mail sempre que houver movimentação em seu processo</Descricao>
                </Topicos>
            </Servico>
            <Subtitle ><Destaque>Contrate AGORA</Destaque> nosso sistema de monitoramento de marca e 
             livre-se da obrigação de vigiá-la <br/> pelos próximos 10 ANOS. 
             Garanta a segurança de sua marca por tempo indeterminado!</Subtitle>
            <Button onClick={handleButtonClick}>
                Contrate aqui!
                <Image src={CarroCompras2} alt="Carro de compras"  />
            </Button>
        </HomeContainer>
    );
};
