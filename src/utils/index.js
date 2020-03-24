export const random = (min, max) => Math
  .floor(Math.random() * (max - min + 1)) + min;

export const cnj = classes => classes
  .filter(item => !!item)
  .join(' ')
  .trim();
