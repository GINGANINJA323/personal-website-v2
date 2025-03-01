import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const domNode = document.getElementById('root');

if (!domNode) throw new Error('No Root node!');

const root = createRoot(domNode);
root.render(<App />);