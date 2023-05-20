import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import PageTitle from "../components/PageTitle";
import ActionBtn from "../components/ActionBtn";
import CustomTable from "../components/CustomTable";
import { BsFillPlusCircleFill, BsFillInfoCircleFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

export default function Products() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState(
    JSON.parse(sessionStorage.getItem("products"))
  );
  const [search, setSearch] = useState("");

  const removeProduct = () => {
    const selected = sessionStorage.getItem("selected");
    if (selected) {
      sessionStorage.setItem(
        "products",
        JSON.stringify(
          products.filter(
            (product) => product.id.toString() !== selected.toString()
          )
        )
      );
      setProducts(JSON.parse(sessionStorage.getItem("products")));
    }
  };

  const gotoDetail = () => {
    const selected = sessionStorage.getItem("selected");
    if (selected) navigate(selected);
  };

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  return (
    <div className="p-8 sm:p-12 w-screen">
      <div className="flex flex-col">
        <Breadcrumb
          path={[
            {
              name: "inicio",
              link: "/",
            },
            {
              name: "productos",
              link: "/productos",
            },
          ]}
        />

        <PageTitle title="Productos" />

        {/* filters */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            value={search}
            placeholder="Buscar un producto o categoría"
            className="w-1/2 p-2 outline-2 outline-orange-500 border rounded-md text-neutral-800"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex items-center gap-x-5">
            <ActionBtn
              styles="text-green-500"
              tooltip="Crear nuevo producto"
              handleClick={() => navigate("crear")}
              icon={<BsFillPlusCircleFill />}
            />
            <ActionBtn
              styles="text-orange-500"
              tooltip="Ver detalle de producto"
              handleClick={gotoDetail}
              icon={<BsFillInfoCircleFill />}
            />
            <ActionBtn
              styles="text-red-500"
              tooltip="Eliminar producto"
              handleClick={removeProduct}
              icon={<FaTrash />}
            />
          </div>
        </div>

        {/* table */}
        <CustomTable
          cols={[
            "ID",
            "Imagen",
            "Producto",
            "Categoría",
            "Precio",
            "Disponibilidad",
          ]}
          products={
            search === ""
              ? products
              : products.filter(
                  (producto) =>
                    producto.nombre
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase()) ||
                    producto.categoria
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                )
          }
        />
      </div>
    </div>
  );
}
