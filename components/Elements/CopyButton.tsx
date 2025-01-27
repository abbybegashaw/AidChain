import React, { useState } from 'react';
import Image from 'next/image';
import tickIcon from '../../public/newDesign/tick-white.svg';
import copyIcon from '../../public/newDesign/copy-icon.svg';
import log from '@/utils/log-browser';
import { VD_COPY_BUTTON_CLICKED } from '@/constants/browserTracking';

interface CopyButtonProps {
  text: string;
  descriptionId?: string;
}

const CopyButton = ({ text, descriptionId }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (descriptionId) {
      log.track(VD_COPY_BUTTON_CLICKED, { descriptionId });
    } else {
      log.track(VD_COPY_BUTTON_CLICKED); 
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <button
      className="bg-[#0D1342] transition-all text-white py-4 flex items-center justify-center gap-2.5 w-full text-sm font-medium"
      onClick={copyToClipboard}
    >
      <Image src={copied ? tickIcon : copyIcon} alt="" />
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

export default CopyButton;
