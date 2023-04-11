import React, { FC } from "react";

interface ImageProps {
   filePath: string;
   className?: string;
   alt: string;
}

export const Image: FC<ImageProps> = ({ filePath, className, alt }) => {
   return filePath ? (
      <img
         src={`${process.env.REACT_APP_API_URL_IMAGE}${filePath}`}
         className={className}
         alt={alt}
      />
   ) : null;
};
