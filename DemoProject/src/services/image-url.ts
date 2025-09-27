
import noImage from '../assets/image.png';

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage

  const target = "media/";
  const index = url.indexOf(target);

  if (index === -1) return url;

  return (
    url.slice(0, index + target.length) +
    "crop/600/400/" +
    url.slice(index + target.length)
  );
};

export default getCroppedImageUrl;



// const getCroppedImageUrl = (url: string) => {
//   const target = 'media/';
//   const index = url.indexOf(target) + target.length;
//   return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
// };

// export default getCroppedImageUrl;

