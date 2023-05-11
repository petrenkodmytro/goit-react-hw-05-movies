import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  height: 100%;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: ${p => p.theme.colors.bgc};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* background: url(https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/79/71/fe/7971fe22-bc78-d2b4-7847-d4cf327bd97d/mza_333893279181940916.jpg/1200x600wp.png); */


  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  transition: 1.5s;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}

ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

img {
	display: block;
	max-width: 100%;
	height: auto;
}

button{
  cursor: pointer;
}
`;
