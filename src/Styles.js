import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html {
  box-sizing: border-box;
  display: flex;
}

body {
  flex: 1;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  overflow-y: scroll;
}

*,
*::before,
* ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export const Btn = styled.button`
  background-color: #252525;
  border: 1px solid #fff;
  color: white;
  text-decoration: none;

  padding: 20px;
  margin-bottom: 30px;

  cursor: pointer;
  outline: none;
  user-select: none;
`;
