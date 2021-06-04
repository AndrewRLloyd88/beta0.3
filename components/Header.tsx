import Logo from './Logo';
import styled from 'styled-components';
import Nav from './Nav';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

export default function Header() {
  return (
    <NavBar>
      <Logo />
      <Nav />
    </NavBar>
  );
}
