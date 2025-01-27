import Image from 'next/image';
import '../../styles/elements.css';

interface Props {
  label?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  labelstyle?: React.CSSProperties;
  type?: string;
  name?: string;
  id?: string;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

const Input = ({
  label,
  placeholder,
  style,
  labelstyle,
  type,
  name,
  id,
  value,
  defaultValue,
  required,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col items-start gap-1.5 block w-full">
      <label className="text-[#0D1342] text-sm mb-2" style={labelstyle}>
        {label}
      </label>
      <input
        className="py-3 px-4 w-full border border-[#BFD7FF1A] bg-[#BFD7FF4D] focus-within:outline-[#bfd6ff9c] placeholder:text-sm placeholder:font-light"
        type={type}
        placeholder={placeholder}
        style={style}
        name={name}
        id={id}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required === true}
        value={value}
      />
    </div>
  );
};

export default Input;
