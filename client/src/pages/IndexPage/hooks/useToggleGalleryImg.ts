import { useState } from 'react';

export const useToggleGalleryImg = (
  backgroundImgUrls: string[]
): [string, (num: number) => void] => {
  const [index, setIndex] = useState(0);

  function switchImage(pos: number) {
    let nextIndex = index + pos;

    if (nextIndex < 0) nextIndex = backgroundImgUrls.length - 1;
    if (nextIndex >= backgroundImgUrls.length) nextIndex = 0;

    setIndex(nextIndex);
  }

  return [backgroundImgUrls[index], switchImage];
};
