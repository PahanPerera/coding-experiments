import Game from "./components/GameBoard";
import styles from "./Main.module.css";
import shuffle from "shuffle-array";

const BASE_VAlUES = [
  "🔪",
  "⏰",
  "🎈",
  "⏰",
  "🎁",
  "🎈",
  "💎",
  "📷",
  "💡",
  "🔪",
  "💎",
  "💰",
  "📷",
  "🎁",
  "💰",
  "💡",
];

function MemoryGame() {
  return (
    <main className={styles.container}>
      <h2>Memory Game</h2>
      <Game.Board VALUES={shuffle(BASE_VAlUES)} />
    </main>
  );
}

export default MemoryGame;
