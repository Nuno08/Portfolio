import React from 'react';
import { createRoot } from 'react-dom/client';
import TranslationById from './TranslationById';

// Opcional: criar um root se quiseres seguir a estrutura típica de React
const container = document.createElement('div');
document.body.appendChild(container);

const root = createRoot(container);
root.render(<TranslationById />);