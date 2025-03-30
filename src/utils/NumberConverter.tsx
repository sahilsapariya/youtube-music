/**
 * @param number - number to be converted
 * @returns string in K, M, B format
 * @description Converts the number to K, M, B format
 * @example
 * NumberConverter(1000) => 1K plays
 * NumberConverter(1000000) => 1M plays
 * NumberConverter(1000000000) => 1B plays
 * NumberConverter(100) => 100
 */

const NumberConverter = (number: number) => {
  const formatNumber = (value: number) => {
    if (value >= 100) {
      return value.toFixed(0);
    }
    const roundedValue = value.toFixed(1);
    return roundedValue.endsWith(".0")
      ? roundedValue.slice(0, -2)
      : roundedValue;
  };

  if (number < 1000) {
    return number.toString() + " plays";
  } else if (number >= 1000 && number < 1000000) {
    const formatted = formatNumber(number / 1000);
    return formatted + "K plays";
  } else if (number >= 1000000 && number < 1000000000) {
    const formatted = formatNumber(number / 1000000);
    return formatted + "M plays";
  } else {
    const formatted = formatNumber(number / 1000000000);
    return formatted + "B plays";
  }
};

export default NumberConverter;
