import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [count, setCount] = useState(0);
  const [runInterval, setRunInterval] = useState(true);

  useEffect(() => {
    if (count >= 100) {
      setRunInterval(false);
    }
  }, [count]);

  useEffect(() => {
    if (runInterval) {
      let intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 200);

      return () => clearInterval(intervalId);
    }
  }, [runInterval]);

  return (
    <section className="progress-bar-wrapper">
      <progress id="progress_bar" value={count} max={100}></progress>
      <label htmlFor="progress_bar">
        ({count}%)&nbsp;
        {count === 100 ? "Completed !!" : "Loading..."}
      </label>
    </section>
  );
};

export default ProgressBar;
