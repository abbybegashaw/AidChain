import React, { useEffect, useState } from 'react';
import '@/styles/uploaddragimages.css';
import Image from 'next/image';
import arrowUp from '@/public/homepagenew/arrow-upward-yellow.svg';
import resizeImage from '@/utils/resizeImage';
import toast from 'react-hot-toast';

const ImageUploadDragComp = ({
  onChange,
}: {
  onChange: (x: string[]) => void;
}) => {
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    const files = selectedImages;
    const resizedImages = files.map((file) => resizeImage(file));
    Promise.allSettled(resizedImages).then((base64s) => {
      onChange(base64s.map(({ value }: any) => value));
    });
  }, [selectedImages]);

  const handleFileChange = (e: any) => {
    const files = e.target.files;

    setSelectedImages([...selectedImages, ...files] as any);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    if (files.length + selectedImages.length > 12) {
      return toast.error('You can select upto only 12 images');
    }

    setSelectedImages([...selectedImages, ...files] as any);
  };

  const handleDeleteImage = (index: any) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div
      className="image-upload-container"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="upload-btn-container">
        <label htmlFor="pic-input" className="upload-btn">
          Upload Images
          <Image src={arrowUp} alt="" />
        </label>
        <input
          type="file"
          id="pic-input"
          onChange={handleFileChange}
          multiple
        />
      </div>
      <div className="image-preview">
        {selectedImages.map((image, index) => (
          <div key={index} className="preview-item">
            <Image
              src={URL.createObjectURL(image)}
              alt={`Preview ${index + 1}`}
              className="preview-image"
            />
            <button
              onClick={() => handleDeleteImage(index)}
              className="delete-button"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploadDragComp;
