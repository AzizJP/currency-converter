export default function rateCalculation(
  firstFormCurrency,
  secondFormCurrency,
  currencyRates,
  value
) {
  return firstFormCurrency === secondFormCurrency
    ? value
    : firstFormCurrency === "RUB"
    ? (currencyRates[secondFormCurrency].Value /
        currencyRates[secondFormCurrency].Nominal) *
      value
    : secondFormCurrency === "RUB"
    ? (currencyRates[firstFormCurrency].Value /
        currencyRates[firstFormCurrency].Nominal) *
      value
    : (currencyRates[firstFormCurrency].Value /
        currencyRates[firstFormCurrency].Nominal /
        (currencyRates[secondFormCurrency].Value /
          currencyRates[secondFormCurrency].Nominal)) *
      value;
}
