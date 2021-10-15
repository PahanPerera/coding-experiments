import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import Tower from "./components/Tower";
import { prepareHanoi, solveHanoi } from "./Solver";

const TOWER_HEIGHT = 5;

function TowerOfHanoi() {
  let [step, setStep] = useState([[], [], []]);
  let [moves, setMoves] = useState(0);
  let [appState, setAppState] = useState("NOT_STARTED");
  let [loop, setLoop] = useState(null);

  useEffect(() => {
    setStep(prepareHanoi(TOWER_HEIGHT));
    setMoves(0);
    return () => {
      if (loop) clearInterval(loop);
    };
  }, [loop]);

  let start = function () {
    if (appState === "STARTED") return;
    setAppState("STARTED");
    let steps = solveHanoi(TOWER_HEIGHT);
    let index = 0;
    let loopHandler = setInterval(() => {
      if (index === steps.length) {
        clearInterval(loopHandler);
        setAppState("FINISHED");
        return;
      }
      setStep(steps[index]);
      index++;
      setMoves(++moves);
    }, 700);
    setLoop(loopHandler);
  };

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
