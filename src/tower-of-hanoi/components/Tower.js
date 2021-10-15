import styles from "./Tower.module.css";

function Tower({ blockNumbers }) {
  let getRow = (blockNumbers) => {
    let blocks = [];
    for (let num of blockNumbers) {
      let string = "";
      for (let i = 0; i < num; i++) {
        string += "X";
      }
      blocks.push(<span key={num}>{string}</span>);
    }
    return blocks;
  };
  return <div className={styles.tower}>{getRow(blockNumbers)}</div>;
}

export default Tower;
