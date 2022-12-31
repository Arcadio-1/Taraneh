import React, { useEffect } from "react";
import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
const SubImage = (props) => {
  const { subImages, title } = props;
  const subToShow = subImages.slice(0, 4);

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-test-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  const images = subToShow.map((image) => {
    return {
      largeURL: image,
      thumbnailURL: image,
      width: 1500,
      height: 1500,
    };
  });

  if (subImages.length > 4) {
  }
  return (
    <div className="productDetails-image-subImage">
      <ul
        className={`productDetails-image-subImage-list pswp-gallery  ${
          subImages.length > 4 && "showMore"
        }`}
        id="my-test-gallery"
      >
        {images.map((image, index) => {
          return (
            <li className="productDetails-image-subImage-item" key={index}>
              <a
                href={image.largeURL}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                key={"my-test-gallery" + "-" + index}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={image.largeURL}
                  width={60}
                  height={60}
                  alt={title}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubImage;
