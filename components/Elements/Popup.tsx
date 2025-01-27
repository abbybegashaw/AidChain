// Modal.js
import React, { CSSProperties } from 'react';
interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode | React.ReactNode[];
  wrapperStyles?: CSSProperties;
  containerStyles?: CSSProperties;
  buttonStyles?: CSSProperties;
  overlayStyles?: CSSProperties;
}

const PopupModal = ({
  isOpen,
  onClose,
  children,
  wrapperStyles,
  containerStyles,
  buttonStyles,
  overlayStyles,
}: Props) => {
  React.useEffect(() => {
    const onCloseOnEscPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onCloseOnEscPress);
    return () => {
      window.removeEventListener('keydown', onCloseOnEscPress);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 lg:flex lg:items-center lg:justify-center overflow-x-hidden overflow-y-auto outline-none lg:w-9/12 w-11/12 mx-auto"
          style={wrapperStyles}
        >
          <div
            className="fixed inset-0 bg-gray-800 opacity-80"
            onClick={onClose}
            style={overlayStyles}
          ></div>
          <div
            className="relative z-50 bg-white lg:p-12 rounded-lg"
            style={containerStyles}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute lg:top-0 right-0 m-4 bg-gray-500 text-gray-50 z-50 px-1 rounded hover:bg-gray-700 font-bold "
              style={buttonStyles}
              role="button"
              tabIndex={0}
            >
              ✕
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;
