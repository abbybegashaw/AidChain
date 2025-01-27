import Image from 'next/image';
import logo from '@/public/newDesign/new-logo.svg';

function Loading({
  className,
  hideText = false,
}: {
  className?: string;
  hideText?: boolean;
}) {
  return (
    <div role="status">
      <span className="fade-animate">
        <Image alt="" src={logo} />
      </span>
      {!hideText && <span className="sr-only">Loading...</span>}
    </div>
  );
}

export default Loading;
