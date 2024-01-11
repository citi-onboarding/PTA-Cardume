import React from "react";
import { Check, ImageDegrade, CarroCompras } from "assets";
import { Side, Container, TextContainer, Checkout, Header, Paragraph, Image, OrangeText, TitleText, Paragraph2, OrangeText2 } from './styles';

export default function Section1() {
  return ( 
    <Container id="section1">
      <OrangeText>Monitore sua marca 24 horas por dia!</OrangeText>
      <Side>
      <TextContainer >
        <TitleText> 
          Registrou <OrangeText>sua marca</OrangeText> por conta
          <br /> própria ou tem uma marca
          <br /> registrada e quer receber
          <br /> <OrangeText>informações diretas</OrangeText> sobre
          <br /> qualquer movimentação que 
          <br /> ela venha a sofrer?
        </TitleText>
        <Paragraph2>
          <br />Oferecemos <OrangeText2>planos de monitoramento</OrangeText2> para
          <br /> empreendedores e empresas acompanharem seus
          <br /> processos de registro ou suas marcas registradas
          <br /> junto ao INPI
        </Paragraph2>
        </TextContainer>
        <Checkout>
          <Header>Traga sua marca para a Cardume Marcas</Header>
          <Paragraph><Image src={Check.src} alt="check1" />
          Monitoramos sua marca em processo de registro 24
          <br/>
          horas por dia e 7 dias por semana durante toda a <br /> tramitação do pedido no INPI</Paragraph>
          <Paragraph><Image src={Check.src} alt="check2" />Monitoramos sua marca registrada 24 horas por dia e <br />
          7 dias por semana após a concessão do registro pelo <br /> INPI</Paragraph>
          <Paragraph><Image src={Check.src} alt="check3" />
          Garantimos que todo seu esforço na construção e no <br/>
          fortalecimento de sua marca não sejam copiados e <br />destruídos pela concorrência desleal</Paragraph>
        </Checkout></Side>
    </Container>
  );

}
