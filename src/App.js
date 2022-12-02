import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Productlist from "./component/Productlist";
import Productshow from "./component/Productshow";

function App() {
  return (
    <div className="container">
      <Header />
      <Productlist />
    </div>
  );
}

export default App;
