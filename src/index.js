import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = "Кондиционеры в Нижнем Новгороде. Установка, обслуживание, сервис, продажа кондиционеров.";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
