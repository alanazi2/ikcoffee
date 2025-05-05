// src/main.tsx

import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './i18n';
import './App.css';
import './index.css'; // إذا كنت تستخدم index.css

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
