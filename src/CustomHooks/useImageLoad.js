import { useEffect, useState } from "react";

const useImageLoad = ({ src }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, [src]);

  useEffect(() => {
    return () => {
      setIsImageLoaded(false);
    };
  }, []);

  return { isImageLoaded };
};

export default useImageLoad;
