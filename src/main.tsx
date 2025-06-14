import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import QualquerCoisa from './App'; -> <QualquerCoisa />
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <h1>Olá, porra!</h1>
  </StrictMode>,
);
