import { memo } from "react";
import { IoIosArrowDown } from "react-icons/io";

const defaultCurrencies = ["RUB", "USD", "KZT"];

function Block({
  value,
  currency,
  onChangeValue,
  onChangeCurrency,
  onCurrencyChangeButton,
  isCurrencyChangeButton,
}) {
  return (
    <form className="conversion-block">
      <ul className="conversion-block__currencies">
        {defaultCurrencies.map((item) => (
          <button
            type="button"
            onClick={() => onChangeCurrency(item)}
            className={`conversion-block__currency ${
              currency === item ? "conversion-block__currency_active" : ""
            }`}
            key={item}
          >
            {item}
          </button>
        ))}
        <button
          type="button"
          onClick={onCurrencyChangeButton}
          className={`conversion-block__currency conversion-block__currency-change ${
            isCurrencyChangeButton === true
              ? "conversion-block__currency-change_active conversion-block__currency_active"
              : ""
          }`}
        >
          <IoIosArrowDown />
        </button>
      </ul>
      <input
        onChange={(evt) => onChangeValue(evt.target.value)}
        value={value}
        type="number"
        className="conversion-block__input"
      />
    </form>
  );
}

export default memo(Block);
