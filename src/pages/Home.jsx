import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import PageTitle from "../components/PageTitle";

export default function Home() {
  return (
    <div className="p-8 sm:p-12 w-screen">
      <Breadcrumb
        path={[
          {
            name: "inicio",
            link: "/",
          },
        ]}
      />

      <PageTitle title="Inicio" />

      <div className="flex flex-col gap-y-4">
        <Link
          to="productos"
          className="text-orange-500 hover:underline hover:text-orange-500 w-fit"
        >
          Productos
        </Link>
        <Link
          to="solicitudes"
          className="text-orange-500 hover:underline hover:text-orange-500 w-fit"
        >
          Solicitudes
        </Link>
      </div>
    </div>
  );
}
