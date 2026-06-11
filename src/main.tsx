import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './tastyc-dark.css';
import './tastyc-menucat.css';
import './tastyc-menu.css';
import './tastyc-special-grid.css';
import './tastyc-why.css';
import './tastyc-reservation.css';
import './tastyc-footer.css';
import './tastyc-blog.css';
import './tastyc-mobile.css';
import './tastyc-effects.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
