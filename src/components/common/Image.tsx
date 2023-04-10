import React, { FC } from "react";

import poster from "assets/images/1.png";

interface ImageProps {
   filePath: string;
   className?: string;
   alt: string;
}

export const Image: FC<ImageProps> = ({ filePath, className, alt }) => {
   return (
      <img
         src={`${process.env.REACT_APP_API_URL_IMAGE}${filePath}` || poster}
         className={className}
         alt={alt}
      />
   );
};
