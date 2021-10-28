import Game from "./components/GameBoard";
import styles from "./Main.module.css";
import shuffle from "shuffle-array";

const OBJECT_VAlUES = [
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
const ANIMAL_VAlUES = [
  "🐒",
  "🐒",
  "🦍",
  "🦍",
  "🐕",
  "🐕",
  "🐈",
  "🐈",
  "🦓",
  "🦓",
  "🐄",
  "🐄",
  "🐖",
  "🐖",
  "🦘",
  "🦘",
];
const PLACES_VAlUES = [
  "🏕️",
  "🏕️",
  "🏝️",
  "🏝️",
  "🏛️",
  "🏛️",
  "🛖",
  "🛖",
  "🏠",
  "🏠",
  "🏥",
  "🏥",
  "🏰",
  "🏰",
  "🕌",
  "🕌",
];

const VALUES_COLLECTION = [OBJECT_VAlUES, ANIMAL_VAlUES, PLACES_VAlUES];

function MemoryGame() {
  const getValues = () => {
    let random = Math.floor(Math.random() * (100 - 1));
    return shuffle(VALUES_COLLECTION[random % 3]);
  };

  return (
    <main className={styles.container}>
      <h2>Memory Game</h2>
      <Game.Board VALUES={getValues()} />
    </main>
  );
}

export default MemoryGame;
