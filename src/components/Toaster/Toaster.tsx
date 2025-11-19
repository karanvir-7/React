import React from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";

const base: ToastOptions = { autoClose: 2000, hideProgressBar: true };

export const notify = {
  success: (msg: string, opts: ToastOptions = {}) =>
    toast.success(msg, { ...base, ...opts }),
  error: (msg: string, opts: ToastOptions = {}) =>
    toast.error(msg, { ...base, ...opts }),
  info: (msg: string, opts: ToastOptions = {}) =>
    toast.info(msg, { ...base, ...opts }),
  warn: (msg: string, opts: ToastOptions = {}) =>
    toast.warn(msg, { ...base, ...opts }),
};

const Toaster: React.FC = () => (
  <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar
    newestOnTop
    closeOnClick
    draggable
  />
);

export default Toaster;