import { memo } from "react";

function PopupWithCurrencies({
  currensies,
  isOpen,
  isSecondFormOpen,
  onPopupCurrency,
}) {
  const currensiesNew = Object.keys(currensies).slice(0, 21);

  return (
    <div className={`popup ${isOpen ? "popup_active" : ""}`}>
      <div
        className={`popup__container ${
          isSecondFormOpen ? "popup__container_second-form" : ""
        }`}
      >
        <ul className="popup__list">
          {currensiesNew.map((item) => (
            <button
              className="popup__currency-button"
              key={item}
              onClick={() => onPopupCurrency(item)}
            >
              {item}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(PopupWithCurrencies);
