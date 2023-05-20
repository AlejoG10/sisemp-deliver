import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";

export default function ActionBtn({
  styles,
  icon: Icon,
  tooltip,
  handleClick,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      {show && (
        <div className="absolute -top-[72px] -left-full text-sm text-center w-fit min-w-[100px] bg-neutral-100 text-neutral-800 p-2 rounded-lg transition duration-300">
          <span className="absolute -bottom-[14px] right-[45px] text-neutral-500">
            <IoMdArrowDropup />
          </span>
          {tooltip}
        </div>
      )}

      <button
        className={`${styles} p-2 rounded-full shadow-around bg-white outline-none`}
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={handleClick}
      >
        {Icon}
      </button>
    </div>
  );
}
