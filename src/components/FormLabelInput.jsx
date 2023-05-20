import React from "react";

export default function FormLabelInput({
  label,
  inputType,
  value,
  handleChange,
  disabled,
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="text-lg text-neutral-800">
        <span className="text-orange-500">*</span> {label}:
      </label>
      {inputType !== "select" ? (
        <input
          type={inputType}
          value={value}
          className="bg-white border rounded-md px-2 py-1 outline-orange-500"
          onChange={handleChange}
          disabled={disabled}
        />
      ) : (
        <select
          onChange={handleChange}
          className="bg-white border rounded-md px-2 py-[6px] outline-orange-500"
        >
          <option></option>
          {value.map((item, i) => (
            <option key={i}>{item || item.nombre}</option>
          ))}
        </select>
      )}
    </div>
  );
}
