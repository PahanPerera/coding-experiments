import { useEffect, useState } from "react";
import { prepareHanoi, solveHanoi } from "../Solver";

function useGameSteps(height) {
  let [step, setStep] = useState([[], [], []]);
  let [moves, setMoves] = useState(0);
  let [isStarted, setIsStarted] = useState(false);
  let [loop, setLoop] = useState(null);

  useEffect(() => {
    setStep(prepareHanoi(height));
    setMoves(0);
    return () => {
      if (loop) clearInterval(loop);
    };
  }, [loop, height]);

  let start = function () {
    if (isStarted) return;
    setIsStarted(true);
    let steps = solveHanoi(height);
    let index = 0;
    let loopHandler = setInterval(() => {
      if (index === steps.length) {
        clearInterval(loopHandler);
        setIsStarted(false);
        return;
      }
      setStep(steps[index]);
      index++;
      setMoves(++moves);
    }, 700);
    setLoop(loopHandler);
  };

  return {
    step,
    moves,
    startFunction: start,
  };
}

export default useGameSteps;
