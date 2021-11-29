import "./App.css";
import FilterableProductableTable from "./components/FilterableProductableTable";
import PRODUCTS from "./data";
function App() {
  return (
    <div className="App">
      <FilterableProductableTable products={PRODUCTS} />
    </div>
  );
}

export default App;
