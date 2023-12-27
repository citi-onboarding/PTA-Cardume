import React from "react";
import { Check, ImageDegrade, CarroCompras } from "assets";
import { Container1, TextBox, OrangeText3, PurpleText, Second, Side, TextBox2, Button, ButtonText, ShoppingCartIcon, handleButtonClick } from './styles';
import localFont from 'next/font/local';

const gothamMedium= localFont({
  src: "../../assets/gotham-medium/Gotham Medium Regular.ttf"
})

export default function Section2() {
  return ( 
    <Container1 id="section2">
      <Side>
          <TextBox className={gothamMedium.className} >
                Agora você pode <OrangeText3>EVITAR tudo isso</OrangeText3> contratando<br />
                nosso <PurpleText>PLANO DE ACOMPANHAMENTO DE<br />
                PROCESSOS no INPI.</PurpleText> Com um investimento de<br /> 
                <OrangeText3>baixíssimo custo</OrangeText3>, você será informado em primeira<br />
                mão <OrangeText3>SEMPRE</OrangeText3> que o seu processo sofrer qualquer<br /> 
                movimentação. Isso porque nossos sistemas vão<br /> 
                trabalhar <PurpleText>24 horas por dia e 7 dias por semana</PurpleText> para <br></br>
                você até a decisão final de seu pedido de registro!<br />
                <br />
                Para você que já possui o registro de sua marca,<br /> 
                saiba em primeira mão sempre que seu processo<br /> 
                sofrer qualquer movimentação e não perca prazos<br /> 
                para responder a Pedidos de Nulidade de Marca<br />
                (PAN) ou de Caducidade de marca registrada.
          </TextBox>
          <Second>
          <TextBox2>
                <OrangeText3>Livre-se da OBRIGAÇÃO</OrangeText3> de acompanhar o seu<br />
                pedido de registro de marca <OrangeText3>SEMANALMENTE</OrangeText3><br /> 
                através da <PurpleText>Revista da Propriedade Industrial</PurpleText>, 
                todas<br/> as terças-feiras, pelos próximos 12 meses. Livre-se<br />
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
            </Button> </Second>
            </Side>
           
    </Container1>
  );

}
