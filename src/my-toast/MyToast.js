import styles from "./MyToast.module.css";
import { createContext, useContext, useState } from "react";

export const MyToastContext = createContext({
  toasts: [],
  showToast: (message) => {},
});

export const MyToastContextProvider = MyToastContext.Provider;

export function useMyToast() {
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    setToasts([
      ...toasts,
      {
        id: toasts.length + 1,
        message,
      },
    ]);
  };

  return {
    toasts,
    showToast,
  };
}

export function MyToast({ message }) {
  return <div className={styles.toast}>{message}</div>;
}

export function MyToastContainer() {
  const { toasts } = useContext(MyToastContext);

  return (
    <div className={styles.container}>
      {toasts.map((toast) => (
        <MyToast key={toast.id} message={toast.message + " - " + toast.id} />
      ))}
    </div>
  );
}
