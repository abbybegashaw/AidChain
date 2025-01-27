import React from 'react';
import PopupModal from './Popup';
import { btnStyles, containerStyles, wrapperStyles } from '@/utils/constants';

const VideoPopup = ({
  isModalOpen,
  setModalOpen,
  videoLink,
}: {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  videoLink: string;
}) => {
  return (
    <PopupModal
      isOpen={isModalOpen}
      onClose={() => {
        setModalOpen(false);
      }}
      buttonStyles={btnStyles}
      wrapperStyles={wrapperStyles}
      containerStyles={containerStyles}
    >
      <video
        autoPlay={true}
        muted={false}
        controls={true}
        className="md:w-[60vw] w-[90vw]"
      >
        <source src={videoLink} type="video/mp4"></source>
      </video>
    </PopupModal>
  );
};

export default VideoPopup;
