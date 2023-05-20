import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import PageTitle from "../components/PageTitle";
import ActionBtn from "../components/ActionBtn";
import CustomTable from "../components/CustomTable";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function Orders() {
  const navigate = useNavigate();

  const [orders] = useState(JSON.parse(sessionStorage.getItem("orders")));
  const [search, setSearch] = useState("");

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
              name: "pedidos",
              link: "/pedidos",
            },
          ]}
        />

        <PageTitle title="Pedidos" />

        {/* filters */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            value={search}
            placeholder="Buscar un pedido"
            className="w-1/2 p-2 outline-2 outline-orange-500 border rounded-md text-neutral-800"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex items-center gap-x-5">
            <ActionBtn
              styles="text-green-500"
              tooltip="Crear un pedido"
              handleClick={() => navigate("crear")}
              icon={<BsFillPlusCircleFill />}
            />
          </div>
        </div>

        {/* table */}
        <CustomTable
          cols={[
            "ID",
            "Proveedor",
            "Fecha de Solicitud",
            "Hora de Solicitud",
            "Fecha de Entrega",
            "Hora de Entrega",
          ]}
          orders={
            search === ""
              ? orders
              : orders?.filter(
                  (orden) =>
                    orden.id
                      .toString()
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase()) ||
                    orden.proveedor
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                )
          }
        />
      </div>
    </div>
  );
}
