import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Pages from "./pages";
import Banner from "./components/Banner";
import { useEffect } from "react";
import { localProducts, localOrders } from "./data";

function App() {
  useEffect(() => {
    if (!sessionStorage.getItem("products"))
      sessionStorage.setItem("products", JSON.stringify(localProducts));

    if (!sessionStorage.getItem("orders"))
      sessionStorage.setItem("orders", JSON.stringify(localOrders));
  });

  return (
    <Router>
      <Banner />
      <Routes>
        <Route exact index element={<Pages.Home />} />
        <Route exact path="/productos" element={<Pages.Products />} />
        <Route
          exact
          path="/productos/crear"
          element={<Pages.CreateProduct />}
        />
        <Route
          exact
          path="/productos/:productoId"
          element={<Pages.ProductDetail />}
        />
        <Route exact path="/pedidos" element={<Pages.Orders />} />
        <Route exact path="/pedidos/crear" element={<Pages.CreateOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
