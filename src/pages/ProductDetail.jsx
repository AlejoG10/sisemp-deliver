import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import PageTitle from "../components/PageTitle";
import { AiFillCheckCircle, AiFillWarning } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

export default function ProductDetail() {
  const { productoId } = useParams();
  const navigate = useNavigate();

  const product = JSON.parse(sessionStorage.getItem("products")).filter(
    (product) => product.id.toString() === productoId.toString()
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
        <div className="flex justify-between">
          <PageTitle title={product?.nombre} />
          <button
            className="p-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white h-fit"
            onClick={() =>
              navigate(
                `/productos?search=${product?.categoria.toLocaleLowerCase()}`
              )
            }
          >
            Ver productos similares
          </button>
        </div>

        <div className="flex items-center gap-x-10">
          <img
            src={product?.img}
            alt={product?.nombre}
            className="w-[150px] aspect-square"
          />
          <div className="flex items-center gap-x-16">
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
