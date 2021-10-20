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
      <button onClick={() => showToast("Hello! This is my Toast")}>
        SHOW ME MY TOAST
      </button>
      <p>FEATURES</p>
      <ul>
        <li>Max limit for Toasts - (3)</li>
        <li>Automatic disappearing (after 3 secs)</li>
      </ul>
      <p>TODO</p>
      <ul>
        <li>Improve automatic disappearing logic</li>
        <li>Appear and exit animations</li>
        <li>Different types of Toast (success, error, warning)</li>
      </ul>
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
