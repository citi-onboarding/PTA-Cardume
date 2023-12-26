import styled from 'styled-components';

interface props {
  toggle: number;
}

export const ContainerNav = styled.nav`
  height: 120px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 6.25rem;
  z-index: 3;
  flex-direction: row;
  background-color: #4C2882;
  border-bottom: 1px solid #FAFAFA;`;

export const List = styled.ul<props>`
  align-items: center;
  flex-direction: row;
  display: flex;
  gap: 3rem;
  list-style-type: none;
  margin: 0;

  li {
    cursor: pointer;
    text-decoration: none;
    color: var(--White-Back, #FAFAFA);
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 24px;
    text-decoration: none;
    &:hover {
    text-decoration: underline;
    text-decoration-color: #FF9100;
  }
  }

  @media screen and (max-width: 1024px) {
    background-color: #FAFAFA;
    display: ${({ toggle }) => (toggle === 1 ? 'flex' : 'none')};
    flex-direction: column;
    padding: 1rem;
    position: absolute;
    right: 0;
    top: 10vw;
    z-index: 15;

    li {
      margin-bottom: 0.5rem;
      color: #4C2882;
      font-size: 1.5rem;    }
  }
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

