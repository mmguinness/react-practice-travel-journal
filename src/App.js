import "./App.css";
import Header from "./Header";
import Card from "./Card";
import data from "./data";

function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div className="App">
      <Header />
      <section className="card--list">{cards}</section>
    </div>
  );
}

export default App;
