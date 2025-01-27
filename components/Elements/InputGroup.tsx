import Image from 'next/image';
import React, { CSSProperties, useState } from 'react';
import eyeClose from '@/public/newDesign/eyeIcon.svg';
import eyeOpen from '@/public/newDesign/eye-open.svg';

interface Props {
  label?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  inputStyle?: React.CSSProperties;
  required?: boolean;
}

const InputGroup = ({
  label,
  placeholder,
  name,
  style,
  type,
  onChange,
  value,
  required,
  inputStyle,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative flex flex-col items-start gap-2" style={style}>
      <label htmlFor="">{label}</label>
      <div className="flex items-center w-full">
        <input
          className="py-3 px-4 placeholder:text-sm w-full border placeholder:font-light border-[#BFD7FF1A] bg-[#BFD7FF4D] focus-within:outline-[#bfd6ff9c] relative"
          placeholder={placeholder}
          type={showPassword ? 'text' : 'password'}
          style={inputStyle}
          name={name}
          value={typeof value === 'string' ? value : formData.password}
          onChange={(e) => {
            handleChange(e);
            onChange?.(e);
          }}
          required={required}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute z-50 right-4"
        >
          <Image src={showPassword ? eyeOpen : eyeClose} alt="" />
        </button>
      </div>
    </div>
  );
};

export default InputGroup;
