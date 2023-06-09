import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import PageTitle from "../components/PageTitle";
import FormLabelInput from "../components/FormLabelInput";
import ActionBtn from "../components/ActionBtn";
import { MdRemoveCircle } from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { PROVEEDORES, genId } from "../data";

export default function CreateOrder() {
  const allProducts = JSON.parse(sessionStorage.getItem("products"));
  const allProductsArr = [];
  for (let i = 0; i < allProducts.length; i++)
    allProductsArr.push(allProducts[i].nombre);

  const [proveedor, setProveedor] = useState("");
  const [fechaSolicitud, setFechaSolicitud] = useState(
    new Date().toLocaleDateString()
  );
  const [horaSolicitud, setHoraSolicitud] = useState(
    new Date().toLocaleTimeString()
  );
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [horaEntrega, setHoraEntrega] = useState("");
  const [products, setProducts] = useState([]);
  const [productsByProv, setProductsByProv] = useState([]);
  const [productos, setProductos] = useState([
    "N/A",
    "N/A",
    "N/A",
    "N/A",
    "N/A",
  ]);
  const [cantidades, setCantidades] = useState([0, 0, 0, 0, 0]);
  const [orderId] = useState(genId());
  const [msg, setMsg] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();

    const prevOrders = JSON.parse(sessionStorage.getItem("orders"));

    const newOrder = {
      id: orderId,
      proveedor,
      fechaSolicitud,
      horaSolicitud,
      fechaEntrega,
      horaEntrega,
    };

    prevOrders.unshift(newOrder);
    sessionStorage.setItem("orders", JSON.stringify(prevOrders));

    setProveedor("");
    setFechaSolicitud("");
    setHoraSolicitud("");
    setFechaEntrega("");
    setHoraEntrega("");
    setProducts([]);
    setProductos([]);
    setCantidades([]);
    setMsg("Solicitud de compra creada exitosamente!");
  };

  useEffect(() => {
    const jsonP = JSON.parse(sessionStorage.getItem("proveedores")).filter(
      (prov) => prov.nombre === proveedor
    )[0]?.productos;

    const arrP = [];
    for (let i = 0; i < jsonP?.length; i++) {
      arrP.push(jsonP[i]?.nombre);
    }

    setProductsByProv(arrP);
  }, [proveedor]);

  return (
    <div className="p-8 sm:p-12 w-screen">
      <Breadcrumb
        path={[
          {
            name: "inicio",
            link: "/",
          },
          {
            name: "solicitudes",
            link: "/solicitudes",
          },
          {
            name: "crear",
            link: "/solicitudes/crear",
          },
        ]}
      />

      {/* preview detail */}
      {products.length > 0 && (
        <>
          <PageTitle title={`Previsualización - Solicitud ${proveedor}`} />
          <div className="flex items-center gap-x-10 mb-10 border p-4 rounded-md w-full">
            <div className="flex flex-col gap-x-16 gap-y-7 w-full">
              {/* id */}
              <div className="flex items-center gap-x-3">
                <h1 className="text-lg font-medium">ID de la Solicitud de Compra:</h1>
                {orderId}
              </div>

              {/* solicitud y entrega */}
              <div className="flex w-full">
                {/* solicitud */}
                <div className="flex items-center gap-x-3 w-1/2">
                  <h1 className="text-lg font-medium">Solicitud:</h1>{" "}
                  <p>
                    {fechaSolicitud} - {horaSolicitud}
                  </p>
                </div>

                {/* entrega */}
                <div className="flex items-center gap-x-3 w-1/2">
                  <h1 className="text-lg font-medium">Entrega:</h1>{" "}
                  <p>
                    {fechaEntrega} - {horaEntrega}
                  </p>
                </div>
              </div>

              {/* divider !! */}
              <div className="w-full h-[1px] border-t-[1px] border-neutral-500 my-2" />

              {/* product(s) */}
              {products.map((_, i) => (
                <div key={i} className="flex w-full">
                  <div className="flex items-center">
                    <img
                      src={
                        JSON.parse(sessionStorage.getItem("products")).filter(
                          (prod) => prod.nombre === productos[i]
                        )[0]?.img
                      }
                      alt={productos[i]}
                      className="w-[100px] aspect-square mr-16"
                    />
                    <div className="flex flex-col w-[200px]">
                      <h1 className="text-lg font-medium">Producto:</h1>
                      {productos[i]}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg font-medium">Cantidad:</h1>
                      {cantidades[i]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <PageTitle title="Crear Solicitud de Compra" />

      <div className="flex flex-col gap-y-7 border w-full rounded-md p-4 bg-neutral-50">
        {/* proveedor */}
        <FormLabelInput
          label="Proveedor"
          inputType="select"
          value={PROVEEDORES}
          handleChange={(e) => setProveedor(e.target.value)}
        />

        <div className="flex items-center gap-x-16 w-full">
          {/* fecha solicitud */}
          <div className="w-1/2">
            <FormLabelInput
              label="Fecha de Solicitud"
              inputType="text"
              value={fechaSolicitud}
              handleChange={(e) => setFechaSolicitud(e.target.value)}
              disabled
            />
          </div>

          {/* hora solicitud */}
          <div className="w-1/2">
            <FormLabelInput
              label="Hora de Solicitud"
              inputType="text"
              value={horaSolicitud}
              handleChange={(e) => setHoraSolicitud(e.target.value)}
              disabled
            />
          </div>
        </div>

        <div className="flex items-center gap-x-16 w-full">
          {/* fecha entrega */}
          <div className="w-1/2">
            <FormLabelInput
              label="Fecha de Entrega"
              inputType="date"
              value={fechaEntrega}
              handleChange={(e) => setFechaEntrega(e.target.value)}
            />
          </div>

          {/* hora entrega */}
          <div className="w-1/2">
            <FormLabelInput
              label="Hora de Entrega"
              inputType="text"
              value={horaEntrega}
              handleChange={(e) => setHoraEntrega(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full h-[1px] border-t-[1px] border-neutral-500 my-2" />

        <div className="flex items-center gap-x-2">
          <ActionBtn
            styles="text-green-500"
            icon={<BsFillPlusCircleFill />}
            tooltip="Agregar producto"
            handleClick={() => setProducts((prev) => [...prev, 0])}
          />

          <ActionBtn
            styles="text-red-500"
            icon={<MdRemoveCircle />}
            tooltip="Eliminar producto"
            handleClick={() =>
              setProducts((prev) => prev.filter((_, i) => i < prev.length - 1))
            }
          />
        </div>

        <div className="flex flex-col items-center gap-x-16 gap-y-7 w-full">
          {products.length > 0 ? (
            products.map((_, i) => (
              <div key={i} className="flex items-center gap-x-16 w-full">
                {/* producto */}
                <div className="w-1/2">
                  <FormLabelInput
                    label="Producto"
                    inputType="select"
                    value={productsByProv}
                    handleChange={(e) => {
                      const newProductos = [...productos];
                      newProductos[products.length - 1] = e.target.value;
                      setProductos(newProductos);
                    }}
                  />
                </div>

                {/* cantidad */}
                <div className="w-1/2">
                  <FormLabelInput
                    label="Cantidad"
                    inputType="number"
                    handleChange={(e) => {
                      const newCantidades = [...cantidades];
                      newCantidades[products.length - 1] = e.target.value;
                      setCantidades(newCantidades);
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-neutral-800">
              Previsualiza tu solicitud de compra agregando productos!
            </h1>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <button
            className="p-2 bg-orange-500 hover:bg-orange-600 rounded-md text-white mt-4"
            onClick={handleCreate}
          >
            Crear solicitud de compra
          </button>
          {msg && <p className="text-green-500">{msg}</p>}
        </div>
      </div>
    </div>
  );
}
