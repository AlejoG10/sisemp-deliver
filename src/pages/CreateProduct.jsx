import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import PageTitle from "../components/PageTitle";
import FormLabelInput from "../components/FormLabelInput";
import { AiFillCheckCircle, AiFillWarning } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { categorias } from "../data";

export default function CreateProduct() {
  const [img, setImg] = useState("");
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("");
  const [msg, setMsg] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();

    const prevProducts = JSON.parse(sessionStorage.getItem("products"));

    const newProduct = {
      id: prevProducts.length,
      img,
      nombre,
      categoria,
      precio,
      disponibilidad,
    };

    prevProducts.unshift(newProduct);
    sessionStorage.setItem("products", JSON.stringify(prevProducts));

    setImg("");
    setNombre("");
    setCategoria("");
    setPrecio("");
    setDisponibilidad("");
    setMsg("Producto creado exitosamente!");
  };

  return (
    <div className="p-8 sm:p-12 w-screen">
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
            name: "crear",
            link: "/productos/crear",
          },
        ]}
      />

      {/* preview detail */}
      {(img || nombre || categoria || precio || disponibilidad) && (
        <>
          <PageTitle title={`Previsualización - ${nombre}`} />
          <div className="flex items-center gap-x-10 mb-10 border p-4 rounded-md">
            <img src={img} alt={nombre} className="w-[150px] aspect-square" />
            <div className="flex items-center gap-x-16">
              {/* precio */}
              <div className="flex flex-col">
                <h1 className="text-xl font-medium mb-2">Precio</h1>
                <p>
                  {new Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                  }).format(precio)}{" "}
                  COP
                </p>
              </div>

              {/* disponibilidad */}
              <div className="flex flex-col">
                <h1 className="text-xl font-medium mb-2">Disponibilidad</h1>
                <div
                  className={`flex justify-center items-center gap-x-4
                  ${Number(disponibilidad) === 0 && "text-red-500"} 
                  ${
                    Number(disponibilidad) > 0 &&
                    Number(disponibilidad) < 10 &&
                    "text-orange-500"
                  }
                  ${Number(disponibilidad) >= 10 && "text-green-500"}`}
                >
                  {Number(disponibilidad) === 0 && (
                    <>
                      <RiErrorWarningFill size={20} />
                      No disponible ({disponibilidad} und.)
                    </>
                  )}
                  {Number(disponibilidad) > 0 &&
                    Number(disponibilidad) < 10 && (
                      <>
                        <AiFillWarning size={20} />
                        Menos de 10 ({disponibilidad} und.)
                      </>
                    )}
                  {Number(disponibilidad) >= 10 && (
                    <>
                      <AiFillCheckCircle size={20} />
                      Disponible ({disponibilidad} und.)
                    </>
                  )}
                </div>
              </div>

              {/* categoría */}
              <div className="flex flex-col">
                <h1 className="text-xl font-medium mb-2">Categoría</h1>
                <p>{categoria}</p>
              </div>
            </div>
          </div>
        </>
      )}

      <PageTitle title="Crear Producto" />

      <div className="flex flex-col gap-y-7 border w-full rounded-md p-4 bg-neutral-50">
        {/* img */}
        <FormLabelInput
          label="Imagen"
          inputType="text"
          value={img}
          handleChange={(e) => setImg(e.target.value)}
        />

        <div className="flex items-center gap-x-16 w-full">
          {/* nombre */}
          <div className="w-1/2">
            <FormLabelInput
              label="Nombre del Producto"
              inputType="text"
              value={nombre}
              handleChange={(e) => setNombre(e.target.value)}
            />
          </div>

          {/* categoría */}
          <div className="w-1/2">
            <FormLabelInput
              label="Categoría del Producto"
              inputType="select"
              value={categorias}
              handleChange={(e) => setCategoria(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-x-16 w-full">
          {/* precio */}
          <div className="w-1/2">
            <FormLabelInput
              label="Precio"
              inputType="number"
              value={precio}
              handleChange={(e) => setPrecio(Number(e.target.value))}
            />
          </div>

          {/* disponibilidad */}
          <div className="w-1/2">
            <FormLabelInput
              label="Disponibilidad"
              inputType="number"
              value={disponibilidad}
              handleChange={(e) => setDisponibilidad(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <button
            className="p-2 bg-orange-500 hover:bg-orange-600 rounded-md text-white mt-4"
            onClick={handleCreate}
          >
            Crear producto
          </button>
          {msg && <p className="text-green-500">{msg}</p>}
        </div>
      </div>
    </div>
  );
}
