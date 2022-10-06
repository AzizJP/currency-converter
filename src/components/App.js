import { useCallback, useEffect, useRef, useState } from "react";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import rateCalculation from "../hooks/rateCalculation";
import Api from "../utils/Api";
import Block from "./Block";
import Header from "./Header";

function App() {
  const [firstFormCurrency, setFirstFormCurrency] = useState("RUB");
  const [secondFormCurrency, setSecondFormCurrency] = useState("USD");
  const [firstFormValue, setFirstFormValue] = useState(0);
  const [secondFormValue, setSecondFormValue] = useState(0);
  const [isCurrencyChangeFirstFormButton, setIsCurrencyChangeFirstFormButton] =
    useState(false);
  const [
    isCurrencyChangeSecondFormButton,
    setIsCurrencyChangeSecondFormButton,
  ] = useState(false);

  const currencyRatesRef = useRef({});

  useEffect(() => {
    Api()
      .then((data) => {
        let rates = data.rates;
        currencyRatesRef.current = rates;
        onChangeFirstFormValue(10000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    onChangeFirstFormValue(firstFormValue);
  }, [secondFormCurrency, firstFormCurrency]);

  const handleCurrencyChangeFirstFormButton = useCallback(() => {
    setIsCurrencyChangeFirstFormButton(!isCurrencyChangeFirstFormButton);
  }, [isCurrencyChangeFirstFormButton]);
  const handleCurrencyChangeSecondFormButton = useCallback(() => {
    setIsCurrencyChangeSecondFormButton(!isCurrencyChangeSecondFormButton);
  }, [isCurrencyChangeSecondFormButton]);

  const onChangeFirstFormValue = useCallback(
    (value) => {
      setFirstFormValue(value);
      setSecondFormValue(
        rateCalculation(
          secondFormCurrency,
          firstFormCurrency,
          currencyRatesRef.current,
          value
        )
      );
    },
    [firstFormCurrency, secondFormCurrency]
  );
  const onChangeSecondFormValue = useCallback(
    (value) => {
      setFirstFormValue(
        rateCalculation(
          firstFormCurrency,
          secondFormCurrency,
          currencyRatesRef.current,
          value
        )
      );
      setSecondFormValue(value);
    },
    [firstFormCurrency, secondFormCurrency]
  );

  const switchCurrensies = () => {
    setFirstFormCurrency(secondFormCurrency);
    setSecondFormCurrency(firstFormCurrency);
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
            onCurrencyChangeButton={handleCurrencyChangeFirstFormButton}
            isCurrencyChangeButton={isCurrencyChangeFirstFormButton}
          />
          <button
            type="button"
            className="conversion-blocks__switch"
            onClick={switchCurrensies}
          >
            <CgArrowsExchangeAltV />
          </button>
          <Block
            value={secondFormValue}
            currency={secondFormCurrency}
            onChangeCurrency={setSecondFormCurrency}
            onChangeValue={onChangeSecondFormValue}
            onCurrencyChangeButton={handleCurrencyChangeSecondFormButton}
            isCurrencyChangeButton={isCurrencyChangeSecondFormButton}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
