import React, { useRef } from "react";
import Table from "react-bootstrap/Table";
import { AiFillCheckCircle, AiFillWarning } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

const TableHead = ({ head }) => {
  return <th className="p-3">{head}</th>;
};

const TableRowProduct = ({
  id,
  img,
  nombre,
  categoria,
  precio,
  disponibilidad,
}) => {
  const rowRef = useRef(null);
  const idRef = useRef(null);

  const handleClick = () => {
    if (rowRef.current.classList.contains("selected")) {
      sessionStorage.setItem("selected", null);
      rowRef.current.classList.remove("selected");
    } else {
      sessionStorage.setItem("selected", idRef.current.innerHTML);
      rowRef.current.classList.add("selected");
    }
  };

  return (
    <tr ref={rowRef} onClick={handleClick} className="cursor-default">
      <td ref={idRef} className="p-4">
        {id}
      </td>
      <td>
        <div className="flex justify-center items-center">
          <img src={img} alt={nombre} className="w-[50px]" />
        </div>
      </td>
      <td className="p-4">{nombre}</td>
      <td className="p-4">{categoria}</td>
      <td className="p-4">
        {new Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
        }).format(precio)}{" "}
        COP
      </td>
      <td className="p-4">
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
          {Number(disponibilidad) > 0 && Number(disponibilidad) < 10 && (
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
      </td>
    </tr>
  );
};

const TableRowOrder = ({
  id,
  proveedor,
  fechaSolicitud,
  horaSolicitud,
  fechaEntrega,
  horaEntrega,
}) => {
  return (
    <tr className="cursor-default">
      <td className="p-4">{id}</td>
      <td className="p-4">{proveedor}</td>
      <td className="p-4">{fechaSolicitud}</td>
      <td className="p-4">{horaSolicitud}</td>
      <td className="p-4">{fechaEntrega}</td>
      <td className="p-4">{horaEntrega}</td>
    </tr>
  );
};

export default function CustomTable({ cols, products, orders }) {
  return (
    <div className="flex flex-col w-full overflow-x-scroll">
      <Table
        striped
        bordered
        hover
        variant="light"
        className="text-center text-main dark:text-main-light"
      >
        {/* head */}
        <thead>
          <tr className="text-lg">
            {cols.map((col, i) => (
              <TableHead key={i} head={col} />
            ))}
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {products &&
            products.map((product) => (
              <TableRowProduct key={product.id} {...product} />
            ))}

          {orders &&
            orders.map((order) => <TableRowOrder key={order.id} {...order} />)}
        </tbody>
      </Table>
    </div>
  );
}
