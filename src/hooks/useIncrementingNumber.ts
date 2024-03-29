import React from "react";

export const useIncrementingNumber = (delay: number) => {
  const [count, setCount] = React.useState(0);

  const savedCallback = React.useRef(() => setCount((c) => c + 1));

  // Set up the interval.
  React.useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return count;
};
