import { useState, useEffect, useCallback } from "react";

export const useCountdown = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isCounting, setIsCounting] = useState(false);

  const startCountdown = useCallback(() => {
    setIsCounting(true);
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isCounting && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          // Clear
          if (prevTime <= 1) {
            clearInterval(interval);
            setIsCounting(false);
            return 0;
          }

          // Counting
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isCounting, timeLeft]);

  return { timeLeft, isCounting, startCountdown };
};
