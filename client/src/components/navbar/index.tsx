import { useState } from 'react';
import { ContainerNav, List, ToggleButton } from './style';
import Image from 'next/image';
import { NavLogo } from '../../assets';
import { Link as ScrollLink } from 'react-scroll'; 

export const Navbar = () => {
  const [toggle, setToggle] = useState(false); 

  const handleToggle = () => {
    setToggle(!toggle); 
  };
  const handleLinkClick = () => {
    setToggle(false);
  };
  const listItem = ['Home', 'Serviço', 'Vantagens', 'Contato'];
  const itemLinks = ['section1', 'section2', 'section3', 'section4'];

  return (
    <ContainerNav>
      <Image src={NavLogo} alt="Logo" />
      <ToggleButton onClick={handleToggle}>
        {toggle ? (
          <span style={{ fontSize: '18px' }}>&times;</span>
        ) : (
          <span style={{ fontSize: '18px' }}>&#9776;</span>
        )}
      </ToggleButton>
      <List toggle={toggle}>
        {listItem.map((item, index) => (
          <li key={index}>
            <ScrollLink
              to={itemLinks[index]}
              smooth={true}
              duration={500}
              spy={true}
              onClick={handleLinkClick}
            >
              {item}
            </ScrollLink>
          </li>
        ))}
      </List>
    </ContainerNav>
  );
};

export default Navbar;
