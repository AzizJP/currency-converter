import { Block } from "./Block";

function App() {
  return (
    <div className="page">
      <div className="container">
        <Block
          value={0}
          currency="RUB"
          onChangeCurrency={(cur) => console.log(cur)}
        />
        <Block value={0} currency="KZT" />
      </div>
    </div>
  );
}

export default App;
