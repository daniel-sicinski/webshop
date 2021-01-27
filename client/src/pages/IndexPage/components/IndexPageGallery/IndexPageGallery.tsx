import React, { Fragment, useEffect } from 'react';
import img1 from '../../../../img/index_gallery_img_1.jpg';
import img2 from '../../../../img/index_gallery_img_2.jpg';
import { useToggleGalleryImg } from '../../hooks/useToggleGalleryImg';
import { ReactComponent as Next } from '../../../../svg/next.svg';
import { ReactComponent as Previous } from '../../../../svg/previous.svg';
import { INDEX_GALLERY_ROTATION_INTERVAL } from '../../../../config/appConstants';

export const IndexPageGallery: React.FunctionComponent = () => {
  const [imgUrl, switchImage] = useToggleGalleryImg([img1, img2]);

  useEffect(() => {
    const intervatId = setInterval(() => {
      switchImage(1);
    }, INDEX_GALLERY_ROTATION_INTERVAL);

    return () => {
      clearInterval(intervatId);
    };
  });

  return (
    <Fragment>
      <header
        className="index-page-gallery"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div
          className="index-page-gallery__prev-btn"
          role="button"
          onClick={() => switchImage(-1)}
        >
          <Previous />
        </div>
        <div
          className="index-page-gallery__next-btn"
          role="button"
          onClick={() => switchImage(1)}
        >
          <Next />
        </div>
      </header>
    </Fragment>
  );
};
