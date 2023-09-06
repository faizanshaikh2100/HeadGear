import { useState, useEffect } from "react";
import { cardItems } from "./config";

export function useTopPicks() {
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    const lastShuffleTimestamp = localStorage.getItem("lastShuffleTimestamp");
    const currentTime = Date.now();

    // Check if the last shuffle happened more than 24 hours ago (86400000 milliseconds)
    if (
      !lastShuffleTimestamp ||
      currentTime - lastShuffleTimestamp >= 86400000
    ) {
      // Initialize shuffled array and selected indices
      const shuffled = [];
      const selectedIndices = new Set();

      // Continue selecting random indices until we have 20 unique items
      while (shuffled.length < 20 && selectedIndices.size < cardItems.length) {
        const randomIndex = Math.floor(Math.random() * cardItems.length);

        // Ensure the same index is not selected again
        if (!selectedIndices.has(randomIndex)) {
          shuffled.push(cardItems[randomIndex]);
          selectedIndices.add(randomIndex);
        }
      }

      // Save the shuffled cards and current timestamp in localStorage
      localStorage.setItem("topPicks", JSON.stringify(shuffled));
      localStorage.setItem("lastShuffleTimestamp", currentTime);

      setTopPicks(shuffled);
    } else {
      // Retrieve the shuffled cards from localStorage
      const storedTopPicks = localStorage.getItem("topPicks");
      if (storedTopPicks) {
        setTopPicks(JSON.parse(storedTopPicks));
      }
    }
  }, []);

  return topPicks;
}
