import React from "react";
import { Check, ImageDegrade, CarroCompras } from "assets";
import { Container1, TextBox, OrangeText3, PurpleText, TextBox2, Button, ButtonText, ShoppingCartIcon, handleButtonClick, Container, TextContainer, Checkout, Header, Paragraph, Image, OrangeText, TitleText, Paragraph2, OrangeText2 } from './styles';
import localFont from 'next/font/local';

const gothamMedium= localFont({
  src: "../../assets/gotham-medium/Gotham Medium Regular.ttf"
})

export default function Section1and2() {
  return ( 
    <Container>
      <TextContainer className={gothamMedium.className}>
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
          <Paragraph><Image src={Check.src} alt="check1" />Monitoramos sua marca em processo de registro 24/7<br /> durante toda a tramitação do pedido no INPI</Paragraph>
          <Paragraph><Image src={Check.src} alt="check2" />Monitoramos sua marca registrada 24/7 após a<br /> concessão do registro pelo INPI</Paragraph>
          <Paragraph><Image src={Check.src} alt="check3" />Garantimos que seu esforço na construção e<br /> fortalecimento de sua marca não sejam em vão</Paragraph>
        </Checkout>
    <Container1>
          <TextBox className={gothamMedium.className}>
                Agora você pode <OrangeText3>EVITAR tudo isso</OrangeText3> contratando<br />
                nosso <PurpleText>PLANO DE ACOMPANHAMENTO DE<br />
                PROCESSOS no INPI.</PurpleText> Com um investimento de<br /> 
                <OrangeText3>baixíssimo custo</OrangeText3>, você será informado em primeira<br />
                mão <OrangeText3>SEMPRE</OrangeText3> que o seu processo sofrer qualquer<br /> 
                movimentação. Isso porque nossos sistemas vão<br /> 
                trabalhar <PurpleText>24 horas por dia e 7 dias por semana</PurpleText> para 
                você até a decisão final de seu pedido de registro!<br />
                <br />
                Para você que já possui o registro de sua marca,<br /> 
                saiba em primeira mão sempre que seu processo<br /> 
                sofrer qualquer movimentação e não perca prazos<br /> 
                para responder a Pedidos de Nulidade de Marca<br />
                (PAN) ou de Caducidade de marca registrada.
          </TextBox>
          <TextBox2>
                <OrangeText3>Livre-se da OBRIGAÇÃO</OrangeText3> de acompanhar o seu<br />
                pedido de registro de marca <OrangeText3>SEMANALMENTE</OrangeText3><br /> 
                através da <PurpleText>Revista da Propriedade Industrial</PurpleText>,<br /> 
                todas as terças-feiras, pelos próximos 12 meses. Livre-se<br />
                desse encargo pelas próximas 52 semanas!<br />
                <br /> 
                Nós sabemos como essa rotina semanal será<br />
                bastante inconveniente, pois vai lhe ROUBAR um<br />
                tempo que você poderia estar trabalhando para<br />
                alavancar o seu empreendimento.
            </TextBox2>
            <Button onClick={handleButtonClick}>
                <ButtonText>Contrate aqui!</ButtonText>
                <ShoppingCartIcon src={CarroCompras.src} alt="Ícone do Carrinho de Compras" />
            </Button>
    </Container1>
    </Container>
  );

}
