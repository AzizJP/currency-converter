function rateCalculation(
  firstFormCurrency,
  secondFormCurrency,
  currencyRates,
  value
) {
  return (
    (currencyRates[firstFormCurrency] / currencyRates[secondFormCurrency]) *
    value
  ).toFixed(3);
}

export default rateCalculation;
