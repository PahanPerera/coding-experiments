import styles from "./Main.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className={styles.container}>
      <h2>Coding Experiments</h2>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/tower-of-hanoi">Tower Of Hanoi</Link>
          </li>
          <li>
            <Link to="/my-toast">My Toast</Link>
          </li>
          <li>
            <Link to="/todo-app-redux">Todo App - Redux</Link>
          </li>
          <li>
            <Link to="/memory-game">Memory Game</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Home;
