import Image from 'next/image';
import logo from '@/public/newDesign/logo-slidebar.svg';
import crossIcon from '@/public/newDesign/Close-x.svg';

function PopupHeader({ back }: { back: () => void }) {
  return (
    <div className="w-full flex items-center justify-between top-0">
      <Image src={logo} alt="" />
      <Image src={crossIcon} alt="" className="cursor-pointer" onClick={back} />
    </div>
  );
}

export default PopupHeader;
