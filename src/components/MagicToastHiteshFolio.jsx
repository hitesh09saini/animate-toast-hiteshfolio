// src/components/MagicToastHiteshFolio.js
import React from 'react';
import { ToastProvider } from './ToastContext.jsx';

const MagicToastHiteshFolio = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>
};

export default MagicToastHiteshFolio;
