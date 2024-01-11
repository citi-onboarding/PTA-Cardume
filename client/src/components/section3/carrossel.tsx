import React from 'react';
import {
    Carrossel1, Carrossel2, Carrossel3, Carrossel4, Carrossel5, Carrossel6, PreviousArrow, NextArrow}  from "assets";
import Image from 'next/image';
import { Infos, Carrossel } from "./style";

export function Item1() {

    return (
                <Carrossel>
                <Image src={Carrossel1} alt="Prazos" />
                <Infos>Acompanhamento dos prazos legais: seja informado sobre todas as movimentações realizadas em seu processo</Infos>
                </Carrossel>    
    );
};

export function Item2() {

    return (
        <Carrossel>
        <Image src={Carrossel2} alt="Pedidos de oposição" />
        <Infos>Pedidos de oposição: saiba em primeira mão se o seu pedido de registro sofreu oposição de terceiros</Infos>
        </Carrossel> 
    );
};

export function Item3() {

    return (
        <Carrossel>
        <Image src={Carrossel3} alt="Deferimento" />
        <Infos>Deferimento ou Indeferimento: seja notificado sobre a decisão final do INPI</Infos>
        </Carrossel>
    );
};

export function Item4() {

    return (
        <Carrossel>
        <Image src={Carrossel4} alt="Alvo de Pedido" />
        <Infos>Descubra se o seu registro foi alvo de Pedido de Nulidade Administrativa (PAN) ou de Caducidade de Registro</Infos>
        </Carrossel>
    );
};

export function Item5() {

    return (
        <Carrossel>
        <Image src={Carrossel5} alt="Identificação de Protocolo" />
        <Infos> Nosso sistema vai te notificar sobre qualquer movimentação realizada no seu 
processo</Infos>
        </Carrossel> 
    );
};

export function Item6() {

    return (
        <Carrossel>
        <Image src={Carrossel6} alt="Notificação" />
        <Infos> Receba um informativo semanal sobre a existência colidências (pedidos de
registro com nomes parecidos ou idênticos ao seu)</Infos>
        </Carrossel>   
    );
};
