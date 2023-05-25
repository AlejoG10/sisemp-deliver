import React from "react";

export default function Codes() {
  return (
    <>
      <div className="absolute right-12 flex flex-col gap-y-2">
        <div className="flex items-center gap-x-4">
          <h1 className="font-semibold text-xl">Company Code:</h1>
          <p>{sessionStorage.getItem("company_code")}</p>
        </div>

        <div className="flex items-center gap-x-4">
          <h1 className="font-semibold text-xl">Receiving Plant:</h1>
          <p>{sessionStorage.getItem("rec_plant")}</p>
        </div>
      </div>

      <br />
      <br />
    </>
  );
}
