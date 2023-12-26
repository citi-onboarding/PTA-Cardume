import React from 'react';
import {
    Carrossel1, Carrossel2, Carrossel3, Carrossel4, Carrossel5, Carrossel6, PreviousArrow, NextArrow}  from "assets";
import Image from 'next/image';
import { Infos, Carrossel } from "./style";

export function Item1() {

    return (
                <Carrossel>
                <Image src={Carrossel1} alt="Prazos" />
                <Infos>Acompanhamento dos prazos legais: seja informado de todas as movimentações realizadas em seu pedido de registro a qualquer tempo e a qualquer hora</Infos>
                </Carrossel>    
    );
};

export function Item2() {

    return (
        <Carrossel>
        <Image src={Carrossel2} alt="Pedidos de oposição" />
        <Infos>Pedidos de oposição: saiba em primeira mão se o seu pedido sofreu oposição de terceiros</Infos>
        </Carrossel> 
    );
};

export function Item3() {

    return (
        <Carrossel>
        <Image src={Carrossel3} alt="Deferimento" />
        <Infos>Deferimento ou Indeferimento: saiba em primeira mão o resultado final do seu pedido de registro</Infos>
        </Carrossel>
    );
};

export function Item4() {

    return (
        <Carrossel>
        <Image src={Carrossel4} alt="Alvo de Pedido" />
        <Infos>Saiba se o seu pedido de registro foi alvo de um Pedido de Nulidade Administrativa (PAN) ou de caducidade por parte de terceiros</Infos>
        </Carrossel>
    );
};

export function Item5() {

    return (
        <Carrossel>
        <Image src={Carrossel5} alt="Identificação de Protocolo" />
        <Infos>Nosso sistema identifica todos os protocolos de petições realizadas no seu processo</Infos>
        </Carrossel> 
    );
};

export function Item6() {

    return (
        <Carrossel>
        <Image src={Carrossel6} alt="Notificação" />
        <Infos>Seja notificado em caso de colidências (protocolos de registro de marcas com nomes parecidos ou idênticos aos da sua marca)</Infos>
        </Carrossel>   
    );
};
