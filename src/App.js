import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./container/Header";
import ProductListing from "./container/ProductListing";
import ProductDetail from "./container/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
