import { useEffect, useState } from "react";
import rateCalculation from "../hooks/rateCalculation";
import Api from "../utils/Api";
import { Block } from "./Block";
import Header from "./Header";

function App() {
  const [currencyRates, setCurrencyRates] = useState({});
  const [firstFormCurrency, setFirstFormCurrency] = useState("RUB");
  const [secondFormCurrency, setSecondFormCurrency] = useState("USD");
  const [firstFormValue, setFirstFormValue] = useState(0);
  const [secondFormValue, setSecondFormValue] = useState(0);

  useEffect(() => {
    Api()
      .then((data) => {
        let rates = data.Valute;
        setCurrencyRates(rates);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setFirstFormCurrency, setSecondFormCurrency]);

  const onChangeFirstFormValue = (value) => {
    setFirstFormValue(value);
    setSecondFormValue(
      rateCalculation(
        firstFormCurrency,
        secondFormCurrency,
        currencyRates,
        value
      )
    );
  };
  const onChangeSecondFormValue = (value) => {
    setFirstFormValue(
      rateCalculation(
        firstFormCurrency,
        secondFormCurrency,
        currencyRates,
        value
      )
    );
    setSecondFormValue(value);
  };

  return (
    <div className="page">
      <div className="container">
        <Header />
        <section className="conversion-blocks">
          <Block
            value={firstFormValue}
            currency={firstFormCurrency}
            onChangeCurrency={setFirstFormCurrency}
            onChangeValue={onChangeFirstFormValue}
          />
          <Block
            value={secondFormValue}
            currency={secondFormCurrency}
            onChangeCurrency={setSecondFormCurrency}
            onChangeValue={onChangeSecondFormValue}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
