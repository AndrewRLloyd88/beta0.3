import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'inter';
  src: url('/static/Inter.var.woff2');
  format: ('woff2');
  font-weight: normal;
  font-style: normal;
}

html{
  margin: 0;
  padding: 0;
  --lightgray: #d0ccd0ff;
  --ghostwhite: #fbfcffff;
  --darkergrey: #605856ff;
  --sapphire: #1c6e8cff;
  --charcoal: #274156ff;
  box-sizing: border-box;
  font-size: 62.5;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html, body {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'inter', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;  
  background-image: url(./bg.jpg);
  background-size: auto;
  background-position-y: 50%;
  background-repeat: no-repeat;
}

button {
  font-family: 'inter', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
`;

const AnimationLayer = styled.div`
  ul {
    margin-top: 0;
    transform: translateX(-20px);
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: -50;
    display: flex;
    justify-content: space-around;
    position: absolute;
  }

  li {
    transform: translateY(-200px);
    width: 30px;
    height: 30px;
    background-color: #80808055;
    list-style: none;
    :nth-child(1) {
      animation: randomize, spin;
      animation-duration: 21s, 10s;
      animation-iteration-count: infinite;
      animation-delay: 3s;
      width: 130px;
      height: 130px;
    }
    :nth-child(2) {
      animation: randomize, spin;
      animation-duration: 22s, 10s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-delay: 8.5s;
      width: 80px;
      height: 80px;
    }
    :nth-child(3) {
      animation: randomize, spin;
      animation-duration: 40s, 20s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      animation-fill-mode: both;
      animation-delay: 15s;
      width: 110px;
      height: 110px;
    }
    :nth-child(4) {
      animation: randomize, spin;
      animation-duration: 34s, 40s;
      animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
      animation-iteration-count: infinite;
      animation-delay: 12s;
      width: 50px;
      height: 50px;
    }
    :nth-child(5) {
      animation: randomize, spin;
      animation-duration: 29s, 18s;
      animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      animation-iteration-count: infinite;
      animation-delay: 4s;
      width: 120px;
      height: 120px;
    }
    :nth-child(6) {
      animation: randomize, spin;
      animation-duration: 19s, 14s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
      animation-delay: 7s;
      width: 70px;
      height: 70px;
    }
    :nth-child(7) {
      animation: randomize, spin;
      animation-duration: 25s, 10s;
      animation-timing-function: ease-out;
      animation-iteration-count: infinite;
      animation-delay: 11s;
      width: 100px;
      height: 100px;
    }
  }

  @keyframes randomize {
    0% {
      transform: translateY(-100px) rotate(0deg);
      background-color: #80808000;
    }
    10% {
      background-color: #8080802f;
    }
    20% {
      background-color: #80808040;
    }
    30% {
      background-color: #80808045;
    }
    100% {
      transform: translateY(calc(100vh + 200px)) rotate(840deg);
      background-color: #80808055;
    }
  }
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <AnimationLayer>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </AnimationLayer>
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
