import React from "react";
import { Check, ImageDegrade, CarroCompras } from "assets";
import { Container1, TextBox, OrangeText3, PurpleText, Second, Side, TextBox2, Button, ButtonText, ShoppingCartIcon, handleButtonClick } from './styles';

export default function Section2() {
  return ( 
    <Container1 id="section2">
      <Side>
          <TextBox  >
                Agora você pode <OrangeText3>EVITAR</OrangeText3> tudo isso contratando<br />
                nosso <PurpleText>PLANO DE ACOMPANHAMENTO DE<br />
                PROCESSOS no INPI.</PurpleText> Com um investimento de<br /> 
                <OrangeText3>baixíssimo custo</OrangeText3>, você será informado em primeira<br />
                mão <OrangeText3>SEMPRE</OrangeText3> que o seu processo sofrer qualquer<br /> 
                movimentação. Os nossos sistemas vão trabalhar<br /> 
                 para você <PurpleText>24 horas por dia </PurpleText> 
                pelo tempo que você <br/>escolher.<br />
                <br />
                Saiba em primeira mão sempre que seu processo<br /> 
                sofrer qualquer movimentação. Não perca prazos<br /> 
                para responder a Pedidos de Nulidade de Marca<br />
                (PAN) ou de Caducidade de Registro.
                <OrangeText3> LIBERTE-SE </OrangeText3> <br/>dos imprevistos que podem te levar a <PurpleText>PERDER</PurpleText> todo<br /> o 
investimento realizado na proteção do seu negócio!

          </TextBox>
          <Second>
          <TextBox2>
                <OrangeText3>Livre-se da OBRIGAÇÃO</OrangeText3> de acompanhar seu<br />
                pedido de registro de marca <OrangeText3>SEMANALMENTE</OrangeText3><br /> 
                através da <PurpleText>Revista da Propriedade Industrial</PurpleText>, 
                <br/> pelos próximos 10 ANOS!
                <br /> 
                <br></br>
                Nós sabemos como essa rotina semanal será<br />
                bastante inconveniente, pois vai lhe ROUBAR<br />
               um tempo que você poderia estar trabalhando<br />
              para o crescimento do seu empreendimento.
            </TextBox2>  
            <Button onClick={handleButtonClick}>
                <ButtonText>Contrate aqui!</ButtonText>
                <ShoppingCartIcon src={CarroCompras.src} alt="Ícone do Carrinho de Compras" />
            </Button> </Second>
            </Side>
           
    </Container1>
  );

}
