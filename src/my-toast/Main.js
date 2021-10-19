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
      <p>TODO : Need to build to auto disappearing logic</p>
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
