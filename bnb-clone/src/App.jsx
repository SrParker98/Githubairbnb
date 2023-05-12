import "./App.css";
import Header from "./Components/Header";
import Filter from "./Components/Filter-bnb/Filter";
import Card from "./Components/cards/Card";
import Filterbar from "./Components/Filter-bnb/Filterbar";
import Carta from "./Components/cards/Carta";
function App() {
  return (
    <div>
      <Header />
      <Filterbar />
      <Card />
    </div>
  );
}

export default App;
