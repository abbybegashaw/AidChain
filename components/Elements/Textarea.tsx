import React, { CSSProperties } from 'react';
import '../../styles/elements.css';

const Textarea = ({
  label,
  placeholder,
  labelStyle,
  style,
  name,
  defaultValue,
}: {
  label?: string;
  placeholder?: string;
  labelStyle?: CSSProperties;
  style?: CSSProperties;
  name?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="text-area flex flex-col gap-3">
      <label htmlFor="" className="text-white text-sm" style={labelStyle}>
        {label}
      </label>
      <textarea
        name={name}
        id=""
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="bg-[#141A4F8C] px-4 py-3 text-[#b7c7e0] lg:pb-[202px] pb-[167px] placeholder:text-[#B7C7E066] text-sm border border-[#FFFFFF33] focus:outline-gray-500 "
        style={style}
      />
    </div>
  );
};

export default Textarea;
