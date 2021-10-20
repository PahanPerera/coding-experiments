import styles from "./MyToast.module.css";
import { createContext, useContext, useEffect, useState } from "react";

export const MyToastContext = createContext({
  toasts: [],
  showToast: (message) => {},
});

export const MyToastContextProvider = MyToastContext.Provider;

export function useMyToast() {
  const [toasts, setToasts] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    const loopHandler = setInterval(() => {
      const now = Date.now();
      let updated = toasts.map((toast) => {
        if (now - toast.time > 3000) toast.status = 0;
        return toast;
      });
      setToasts(updated);
    }, 200);
    return () => {
      clearInterval(loopHandler);
    };
  });

  const showToast = (message) => {
    if (toasts.length === 3) {
      toasts.shift();
    }
    setToasts([
      ...toasts,
      {
        id: id,
        message,
        time: Date.now(),
        status: 1,
      },
    ]);
    setId(id + 1);
  };

  return {
    toasts,
    showToast,
  };
}

export function MyToast({ message }) {
  useEffect(() => {
    console.log("Appear");
    return () => {
      console.log("Disappear");
    };
  });
  return <div className={styles.toast}>{message}</div>;
}

export function MyToastContainer() {
  const { toasts } = useContext(MyToastContext);

  return (
    <div className={styles.container}>
      {toasts
        .filter((toast) => toast.status === 1)
        .map((toast) => (
          <MyToast key={toast.id} message={toast.message + " - " + toast.id} />
        ))}
    </div>
  );
}
