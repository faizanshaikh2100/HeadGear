import { useState, useEffect } from "react";
import { cardItems } from "./config";

export function useTopPicks() {
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    const startIndex = Math.floor(Math.random() * cardItems.length - 20);
    const arr = cardItems.slice(startIndex, startIndex + 20);

    const topPicksData = shuffleArray(arr);

    setTopPicks(topPicksData);
  }, []);
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  return topPicks;
}
