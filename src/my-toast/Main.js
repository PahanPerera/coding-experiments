import { useContext } from "react";
import styles from "./Main.module.css";
import {
  MyToastContainer,
  MyToastContext,
  MyToastContextProvider,
  useMyToast,
} from "./MyToast";

function PageContent() {
  const { showToast } = useContext(MyToastContext);
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <p>FEATURES</p>
        <ul>
          <li>Max limit for Toasts - (3)</li>
          <li>Automatic disappearing (after 3 secs)</li>
          <li>Improve automatic disappearing logic</li>
          <li>Appear and exit animations</li>
        </ul>
        <p>TODO</p>
        <ul>
          <li>Different types of Toast (success, error, warning)</li>
        </ul>
      </div>
      <div className={styles.btnContainer}>
        <button onClick={() => showToast("Hello! This is my Toast")}>
          SHOW ME MY TOAST
        </button>
      </div>
    </main>
  );
}

function MyToastPage() {
  const toastConfigs = useMyToast();
  return (
    <>
      <MyToastContextProvider value={toastConfigs}>
        <PageContent />
        <MyToastContainer />
      </MyToastContextProvider>
    </>
  );
}

export default MyToastPage;
