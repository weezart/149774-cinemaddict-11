export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomizedReducedArray = (array, count) => {
  return array.slice(0).sort(() => Math.random() - 0.5).slice(0, count);
};
