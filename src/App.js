import "./App.css";
import Cards from "./Components/Cards.js/Cards";
import Header from "./Components/Header/Header";
import Data from './Components/Data/data.json';
import {useState} from "react";

function App() {

  const [item, setItem] = useState(Data);

  return (
    <div className="App">
      <Header />
      <Cards item={item} />
    </div>
  );
}

export default App;
