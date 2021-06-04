import Link from 'next/link';
import styled from 'styled-components';

const LogoStyle = styled.div`
  a {
    text-decoration: none;
    color: var(--charcoal);
    font-size: 2rem;
    font-weight: bold;
    &:hover {
      color: var(--sapphire);
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyle>
      <Link href="/">ARLMedia</Link>
    </LogoStyle>
  );
}
