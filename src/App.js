import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Pages from "./pages";
import Banner from "./components/Banner";
import Codes from "./components/Codes";
import { useEffect } from "react";
import { LOCAL_PRODUCTS, LOCAL_ORDERS, LOCAL_PROVEEDORES, genId } from "./data";

function App() {
  useEffect(() => {
    if (!sessionStorage.getItem("products"))
      sessionStorage.setItem("products", JSON.stringify(LOCAL_PRODUCTS));

    if (!sessionStorage.getItem("proveedores"))
      sessionStorage.setItem("proveedores", JSON.stringify(LOCAL_PROVEEDORES));

    if (!sessionStorage.getItem("orders"))
      sessionStorage.setItem("orders", JSON.stringify(LOCAL_ORDERS));

    if (!sessionStorage.getItem("company_code"))
      sessionStorage.setItem("company_code", genId().toString());

    if (!sessionStorage.getItem("rec_plant"))
      sessionStorage.setItem("rec_plant", genId().toString());
  }, []);

  return (
    <Router>
      <Banner />
      <Codes />

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
        <Route exact path="/solicitudes" element={<Pages.Orders />} />
        <Route
          exact
          path="/solicitudes/crear"
          element={<Pages.CreateOrder />}
        />
      </Routes>
    </Router>
  );
}

export default App;
