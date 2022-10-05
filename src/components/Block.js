const defaultCurrencies = ["RUB", "USD", "KZT"];

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
  <form className="conversion-block">
    <ul className="conversion-block__currencies">
      {defaultCurrencies.map((item) => (
        <li
          onClick={() => onChangeCurrency(item)}
          className={`conversion-block__currency ${
            currency === item ? "active" : ""
          }`}
          key={item}
        >
          {item}
        </li>
      ))}
      <li className="conversion-block__currency">
        <svg
          className="conversion-block__switch"
          height="50px"
          viewBox="0 0 50 50"
          width="50px"
        >
          <rect fill="none" height="50" width="50" />
          <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
        </svg>
      </li>
    </ul>
    <input
      onChange={(evt) => onChangeValue(evt.target.value)}
      value={value}
      type="number"
      className="conversion-block__input"
    />
  </form>
);
