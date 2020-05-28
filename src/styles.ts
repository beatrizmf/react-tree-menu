import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #7159c1;
    font-family: "Montserrat", Arial;

    color: #ffffffaa;

    font-size: 2rem;
  }
`}
`;
