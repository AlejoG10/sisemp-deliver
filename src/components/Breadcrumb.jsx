import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ path }) {
  return (
    <div className="flex flex-wrap gap-2 mb-7">
      {path.map((link) => (
        <div key={link.link} className="flex gap-x-2">
          <span className="text-orange-800 font-semibold last:hidden"> / </span>
          <Link
            key={link.link}
            to={link.link}
            className="text-orange-600 hover:underline hover:text-orange-600"
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
