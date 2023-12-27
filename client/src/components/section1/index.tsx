import React from "react";
import { Check, ImageDegrade, CarroCompras } from "assets";
import { Side, Container, TextContainer, Checkout, Header, Paragraph, Image, OrangeText, TitleText, Paragraph2, OrangeText2 } from './styles';
import localFont from 'next/font/local';

const gothamMedium= localFont({
  src: "../../assets/gotham-medium/Gotham Medium Regular.ttf"
})

export default function Section1() {
  return ( 
    <Container id="section1">
      <Side>
      <TextContainer className={gothamMedium.className} >
        <TitleText> 
          Registrou <OrangeText>sua marca</OrangeText> por conta
          <br /> própria ou tem uma marca
          <br /> registrada e quer receber
          <br /> <OrangeText>informações diretas</OrangeText> sobre
          <br /> qualquer movimentação que ela
          <br /> venha a sofrer?
        </TitleText>
        <Paragraph2 className={gothamMedium.className}>
          <br />Oferecemos <OrangeText2>planos de monitoramento</OrangeText2> para que
          <br /> empreendedores e empresas acompanhem seus
          <br /> processos de registro ou suas marcas registradas
          <br /> junto ao INPI
        </Paragraph2>
        </TextContainer>
        <Checkout>
          <Header>Traga sua marca para a Cardume Marcas</Header>
          <Paragraph><Image src={Check.src} alt="check1" />Monitoramos sua marca em processo de registro<br/>  24/7 durante toda a tramitação do pedido no INPI</Paragraph>
          <Paragraph><Image src={Check.src} alt="check2" />Monitoramos sua marca registrada 24/7 após a <br/>concessão do registro pelo INPI</Paragraph>
          <Paragraph><Image src={Check.src} alt="check3" />Garantimos que seu esforço na construção e <br/>fortalecimento de sua marca não sejam em vão</Paragraph>
        </Checkout></Side>
    </Container>
  );

}
