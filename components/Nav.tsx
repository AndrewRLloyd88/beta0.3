import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.nav`
  display: flex;

  a {
    text-decoration: none;
    color: var(--ghostwhite);
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 20px;
    &:hover {
      color: var(--charcoal);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <Link href="#">Page 1</Link>
      <Link href="#">Page 2</Link>
      <Link href="#">Page 3</Link>
      <Link href="#">Page 4</Link>
    </NavStyles>
  );
}
