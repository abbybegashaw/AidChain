import React, { useEffect, useState } from 'react';
import '@/styles/app.css';
import Image from 'next/image';
import arrowUp from '@/public/homepagenew/arrow-upward-yellow.svg';

const ImageUpload = ({ onChange }: { onChange: (x: string[]) => void }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    const files = selectedImages;
    const array: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const base64Data = (e.target as any).result;
        array.push(base64Data);
        if (array.length === selectedImages.length) {
          onChange(array);
        }
      };

      reader.readAsDataURL(files[i]);
    }
  }, [selectedImages, onChange]);

  const handleFileChange = (e: any) => {
    const files = e.target.files;
    setSelectedImages([...selectedImages, ...files] as any);
  };

  const handleDeleteImage = (index: any) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div className="image-upload-container">
      <div className="upload-btn-container">
        <label htmlFor="pic-input" className="upload-btn">
          Upload Images
          <Image src={arrowUp} alt="" />
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          multiple
          className="uploads"
          id="pic-input"
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

export default ImageUpload;
