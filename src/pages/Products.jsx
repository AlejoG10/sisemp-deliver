import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import PageTitle from "../components/PageTitle";
import ActionBtn from "../components/ActionBtn";
import CustomTable from "../components/CustomTable";
import { AiFillCheckCircle, AiFillWarning, AiFillFilter } from "react-icons/ai";
import { BsFillPlusCircleFill, BsFillInfoCircleFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";

export default function Products() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState(
    JSON.parse(sessionStorage.getItem("products"))
  );
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filter, setFilter] = useState(null);

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
          <div className="flex items-center gap-x-5">
            <input
              type="text"
              value={search}
              placeholder="Buscar un producto o categoría"
              className="w-[350px] p-2 outline-2 outline-orange-500 border rounded-md text-neutral-800"
              onChange={(e) => setSearch(e.target.value)}
            />
            <ActionBtn
              styles="text-blue-500"
              tooltip="Ver / Ocultar Filtros"
              handleClick={() => {
                setShowFilters((prev) => !prev);
                setFilter(null);
              }}
              icon={<AiFillFilter />}
            />
          </div>

          {showFilters && (
            <div className="flex items-center gap-x-5">
              <ActionBtn
                styles="text-red-500"
                tooltip="Productos sin stock"
                handleClick={() => setFilter(0)}
                icon={<RiErrorWarningFill />}
              />
              <ActionBtn
                styles="text-orange-500"
                tooltip="Productos poco stock"
                handleClick={() => setFilter(1)}
                icon={<AiFillWarning />}
              />
              <ActionBtn
                styles="text-green-500"
                tooltip="Productos disponibles"
                handleClick={() => setFilter(2)}
                icon={<AiFillCheckCircle />}
              />
            </div>
          )}

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
            "ID Proveedor",
            "Imagen",
            "Nombre",
            "Categoría",
            "Precio",
            "Disponibilidad",
          ]}
          products={
            filter !== null
              ? products.filter((product) => {
                  if (filter === 0) return product.disponibilidad === 0;
                  if (filter === 1)
                    return (
                      product.disponibilidad > 0 && product.disponibilidad < 10
                    );
                  if (filter === 2) return product.disponibilidad >= 10;
                })
              : search === ""
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
