import Image from "next/image";
import React from "react";
Image;
const Simplegalery = (props) => {
  const { images, title, id, galleryID } = props;

  return (
    <div>
      {images.map((image) => {
        return (
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={galleryID + "-" + id}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={image.largeURL} width={500} height={500} alt={title} />
          </a>
        );
      })}
    </div>
  );
};

export default Simplegalery;
