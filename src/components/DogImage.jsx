// components/DogImage.jsx

import fallback from "../assets/placeholder_dog_img.png";

const DogImage = ({ src, alt, className }) => {
  return (
    <img
      className={className}
      src={src || fallback}
      alt={alt}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallback;
      }}
    />
  );
};

export default DogImage;
