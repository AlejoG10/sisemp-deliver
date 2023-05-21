import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import PageTitle from "../components/PageTitle";
import ActionBtn from "../components/ActionBtn";
import { AiFillCheckCircle, AiFillFilter, AiFillWarning } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

export default function ProductDetail() {
  const { productoId } = useParams();
  const navigate = useNavigate();

  const product = JSON.parse(sessionStorage.getItem("products")).filter(
    (product) => product.id.toString() === productoId.toString()
  )[0];

  const proveedor = JSON.parse(sessionStorage.getItem("proveedores")).filter(
    (proveedor) => proveedor.id.toString() === product.proveedorId.toString()
  )[0];

  return (
    <div className="p-8 sm:p-12 w-screen cursor-default">
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
          {
            name: product?.nombre.toLocaleLowerCase(),
            link: `/productos/${productoId}`,
          },
        ]}
      />

      <div className="border rounded-lg p-5">
        <div className="flex justify-between items-center">
          <PageTitle title={product?.nombre} />

          <ActionBtn
            styles="text-orange-500"
            icon={<AiFillFilter />}
            tooltip="Productos similares"
            handleClick={() =>
              navigate(
                `/productos?search=${product?.categoria.toLocaleLowerCase()}`
              )
            }
          />
        </div>
        <div className="flex items-center gap-x-10">
          {/* img */}
          <img
            src={product?.img}
            alt={product?.nombre}
            className="w-[150px] aspect-square"
          />

          <div className="flex items-center gap-x-16">
            {/* proveedor */}
            <div className="flex flex-col">
              <h1 className="text-xl font-medium mb-2">Proveedor</h1>
              <p>{proveedor?.nombre}</p>
            </div>

            {/* precio */}
            <div className="flex flex-col">
              <h1 className="text-xl font-medium mb-2">Precio</h1>
              <p>
                {new Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                }).format(product?.precio)}{" "}
                COP
              </p>
            </div>

            {/* disponibilidad */}
            <div className="flex flex-col">
              <h1 className="text-xl font-medium mb-2">Disponibilidad</h1>
              <div
                className={`flex justify-center items-center gap-x-4
                  ${Number(product?.disponibilidad) === 0 && "text-red-500"} 
                  ${
                    Number(product?.disponibilidad) > 0 &&
                    Number(product?.disponibilidad) < 10 &&
                    "text-orange-500"
                  }
                  ${Number(product?.disponibilidad) >= 10 && "text-green-500"}`}
              >
                {Number(product?.disponibilidad) === 0 && (
                  <>
                    <RiErrorWarningFill size={20} />
                    No disponible ({product?.disponibilidad} und.)
                  </>
                )}
                {Number(product?.disponibilidad) > 0 &&
                  Number(product?.disponibilidad) < 10 && (
                    <>
                      <AiFillWarning size={20} />
                      Menos de 10 ({product?.disponibilidad} und.)
                    </>
                  )}
                {Number(product?.disponibilidad) >= 10 && (
                  <>
                    <AiFillCheckCircle size={20} />
                    Disponible ({product?.disponibilidad} und.)
                  </>
                )}
              </div>
            </div>

            {/* categoría */}
            <div className="flex flex-col">
              <h1 className="text-xl font-medium mb-2">Categoría</h1>
              <p>{product?.categoria}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
