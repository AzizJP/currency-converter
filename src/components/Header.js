import { memo } from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Конвертер валют</h1>
    </header>
  );
}

export default memo(Header);
