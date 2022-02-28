import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html { font-size: 10px; }
  body { font-size: 1rem; }
`;

export default GlobalStyle;