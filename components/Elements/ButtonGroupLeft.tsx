import React, { CSSProperties } from 'react';
import Image from 'next/image';

const ButtonGroupLeft = ({
  text,
  icon,
  style,
}: {
  text: string;
  icon: string;
  style?: CSSProperties;
}) => {
  return (
    <div>
      <button
        className="bg-[#0D1342] text-white text-sm w-full flex items-center gap-2 justify-center border border-[#FFFFFF33] hover:bg-[#085CF0]"
        style={style}
      >
        <Image src={icon} alt="" />
        {text}
      </button>
    </div>
  );
};

export default ButtonGroupLeft;
