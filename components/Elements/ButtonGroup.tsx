import '@/components/Elements/Button';
import Image from 'next/image';
import '../../styles/elements.css';

interface Props {
  text: string;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  icon: string;
  onClick?: () => void;
}

const ButtonGroup = ({
  text,
  style,
  imageStyle,
  type,
  icon,
  onClick,
}: Props) => {
  return (
    <div className="btn-dropdown" onClick={onClick}>
      <Image src={icon} alt="" className="dropdown" style={imageStyle} />
      <button className="btn-group" style={style} type={type}>
        {text}
      </button>
    </div>
  );
};

export default ButtonGroup;
