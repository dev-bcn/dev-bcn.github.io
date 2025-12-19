/** Fisher-Yates shuffle algorithm using window.crypto.getRandomValues() */
export const shuffleArray = <T>(array: T[]): T[] => {
  if (!array) {
    return [];
  }
  const shuffledArray = [...array]; // Create a copy to avoid modifying the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j;
    const max = (i + 1) * (2 ** 32 / (i + 1));
    do {
      j = window.crypto.getRandomValues(new Uint32Array(1))[0];
    } while (j >= max);
    j = j % (i + 1);
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
