import { useEffect, useState } from "react";
import Api from "../utils/Api";
import { Block } from "./Block";
import Header from "./Header";

function App() {
  const [currencyRates, setCurrencyRates] = useState({});

  useEffect(() => {
    Api()
      .then((data) => {
        let rates = data.Valute;
        setCurrencyRates(rates);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page">
      <div className="container">
        <Header />
        <section className="conversion-blocks">
          <Block
            value={0}
            currency="RUB"
            onChangeCurrency={(cur) => console.log(cur)}
          />
          <Block value={0} currency="KZT" />
        </section>
      </div>
    </div>
  );
}

export default App;
