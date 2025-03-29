/**
 * @param number - number to be converted
 * @returns number in K, M, B format
 * @description Converts the number to K, M, B format
 * @example
 * NumberConverter(1000) => 1K plays
 * NumberConverter(1000000) => 1M plays
 * NumberConverter(1000000000) => 1B plays
 * NumberConverter(100) => 100
 */

const NumberConverter = (number: number) => {
  if (number < 1000) {
    return number;
  } else if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(1) + "K plays";
  } else if (number >= 1000000 && number < 1000000000) {
    return (number / 1000000).toFixed(1) + "M plays";
  } else {
    return (number / 1000000000).toFixed(1) + "B plays";
  }
};

export default NumberConverter;
