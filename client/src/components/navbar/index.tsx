import React, { useEffect, useState } from 'react';
import { ContainerNav, List, ToggleButton } from './style';
import Image from 'next/image';
import { NavLogo } from "../../assets";

import Link from 'next/link';

export const Navbar = () => {
  const [toggle, setToggle] = useState(0);
  const handleToggle = () => {
    setToggle(toggle === 0 ? 1 : 0);
  };
  const listItem = ['Home', 'Serviço', 'Vantagens', 'Contato'];
  const itemLinks = ['#section1', '#section2', '#section3', '#section4'];


  return (
    <ContainerNav>
      <Image src={NavLogo} alt='Logo' />
      <ToggleButton onClick={handleToggle}>
        {toggle ? (
          <span style={{ fontSize: '18px' }}>&times;</span>
        ) : (
          <span style={{ fontSize: '18px' }}>&#9776;</span>
        )}
      </ToggleButton>
      <List toggle={toggle}>
        {listItem.map((item, index) => (
          <Link href={itemLinks[index]} key={index}>
            <li>{item}</li>
          </Link>
          //    <Newli>
          //    <NewLink href= {itemLinks[index]} key = {index}>{item}</NewLink>
          //  </Newli>
        ))}
      </List>
    </ContainerNav>
  );
};

export default Navbar;