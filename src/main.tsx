import React from 'react';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/reset.css';
import App from './pages/App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
