import { Fragment, useState } from "react";
import styles from "./GameBoard.module.css";

function Board({ VALUES }) {
  const [openCells, setOpenCells] = useState([]);
  const [pendingMatch, setPendingMatch] = useState(false);
  let [count, setCount] = useState(0);

  const handleCellOpen = (index) => {
    setOpenCells([...openCells, index]);
    setCount(++count);
    if (pendingMatch) {
      setTimeout(() => {
        let lastId = openCells.pop();
        if (VALUES[lastId] === VALUES[index]) {
          setOpenCells([...openCells, lastId, index]);
        } else {
          setOpenCells([...openCells]);
        }
        setPendingMatch(false);
      }, 500);
    } else {
      setPendingMatch(true);
    }
  };

  const getCell = (index) => {
    return (
      <Cell
        id={index}
        value={VALUES[index]}
        closed={openCells.indexOf(index) === -1}
        onOpen={handleCellOpen}
      />
    );
  };

  return (
    <Fragment>
      <section className={styles.grid}>
        <Row>
          {getCell(0)}
          {getCell(1)}
          {getCell(2)}
          {getCell(3)}
        </Row>
        <Row>
          {getCell(4)}
          {getCell(5)}
          {getCell(6)}
          {getCell(7)}
        </Row>
        <Row>
          {getCell(8)}
          {getCell(9)}
          {getCell(10)}
          {getCell(11)}
        </Row>
        <Row>
          {getCell(12)}
          {getCell(13)}
          {getCell(14)}
          {getCell(15)}
        </Row>
      </section>
      <h3>Count - {count}</h3>
    </Fragment>
  );
}

function Row({ children }) {
  return <div className={styles.row}>{children}</div>;
}

function Cell({ id, value, closed = true, onOpen }) {
  return (
    <div
      className={styles.cellContainer}
      onClick={() => {
        if (closed === true) onOpen(id);
      }}
    >
      {closed ? <div className={styles.cover}></div> : ""}
      <div className={styles.cell}>{value}</div>
    </div>
  );
}

const Game = {
  Board,
};

export default Game;
