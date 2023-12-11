import React from "react";
import { Check } from "assets";
import { Container, TextContainer, Checkout, Header, Paragraph, Image } from './styles';

export default function Section1() {
  return (
    <Container>
      <TextContainer>
        <h1>
          Registrou <span>sua marca</span> por conta <br />
          própria ou tem uma marca <br />
          registrada e quer receber <br />
          <span>informações diretas</span> sobre <br />
          qualquer movimentação que ela <br />
          venha a sofrer?
        </h1>
        <Paragraph>
          Oferecemos <span>planos de monitoramento</span> para que<br />
          empreendedores e empresas acompanhem seus<br />
          processos de registro ou suas marcas registradas<br />
          junto ao INPI
        </Paragraph>
        <Checkout>
          <Header>Traga sua marca para a Cardume Marcas</Header>
          <Paragraph><Image src="Check" alt="check1" />Monitoramos sua marca em processo de registro 24/7<br /> durante toda a tramitação do pedido no INPI</Paragraph>
          <Paragraph><Image src="Check" alt="check2" />Monitoramos sua marca registrada 24/7 após a<br /> concessão do registro pelo INPI</Paragraph>
          <Paragraph><Image src="Check" alt="check3" />Garantimos que seu esforço na construção e<br /> fortalecimento de sua marca não sejam em vão</Paragraph>
        </Checkout>
      </TextContainer>
    </Container>
  );
}

