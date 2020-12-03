import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Style from './Styles';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <Style />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
