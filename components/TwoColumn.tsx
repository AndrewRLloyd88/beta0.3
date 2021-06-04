import styled from 'styled-components';
import Image from 'next/image';

const TwoColContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: calc(100vh - 70px);
  box-sizing: border-box;
`;

const LeftSideContainer = styled.div`
  padding: 10px;
  margin-right: 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 50%;
  color: var(--charcoal);

  button {
    font-size: 2rem;
    border-radius: 10px;
    background-color: var(--charcoal);
    color: var(--ghostwhite);
    outline: none;
    box-shadow: 10px 10px 10px #605856ff;
    &:hover {
      background-color: var(--ghostwhite);
      color: var(--sapphire);
    }
  }
`;

const RightSideContainer = styled.div`
  border-radius: 10px;
  padding: 0px;
  border: 10px solid var(--darkergrey);
  transform: skew(-10deg);
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function TwoColumn() {
  return (
    <TwoColContainer>
      <LeftSideContainer>
        <h1>Let's Create Together!</h1>
        <h1>Website Development and Video Services done your way!</h1>
        <button>Learn More</button>
      </LeftSideContainer>
      <RightSideContainer>
        <Image src="/computer.jpeg" height="1000" width="810"></Image>
      </RightSideContainer>
    </TwoColContainer>
  );
}
