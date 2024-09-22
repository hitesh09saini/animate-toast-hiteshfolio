import React, { createContext, useContext, useState } from 'react';
import Toast from './Toast.jsx'; // Ensure this path is correct

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const mtoast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000); // Auto-dismiss after 3 seconds
  };

  return (
    <ToastContext.Provider value={{ mtoast }}>
      {children}
      {toast && <Toast message={toast} type="info" />} {/* Add type if needed */}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
