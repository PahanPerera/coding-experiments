import styles from "./Main.module.css";
import Tower from "./components/Tower";
import useGameSteps from "./hooks/useGameSteps";

const TOWER_HEIGHT = 5;

function TowerOfHanoi() {
  const { step, moves, startFunction: start } = useGameSteps(TOWER_HEIGHT);

  return (
    <main className={styles.container}>
      <header>
        <h1>Tower Of Hanoi</h1>
        <p>
          Object of the game is to move all the disks over to Tower 3. But you
          cannot place a larger disk onto a smaller disk.
        </p>
      </header>
      <div className={styles.playground}>
        <section>
          <Tower blockNumbers={step[0]} />
        </section>
        <section>
          <Tower blockNumbers={step[1]} />
        </section>
        <section>
          <Tower blockNumbers={step[2]} />
        </section>
      </div>
      <footer>
        <h1>Moves : {moves}</h1>
        <button onClick={() => start()}>START</button>
      </footer>
    </main>
  );
}

export default TowerOfHanoi;
