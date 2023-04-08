import { useState } from 'react';

const photos = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfClSyz3iuHfIRHL1ggEmYzBi-4etjYoFWQo_mLqXIicMFKOvC5kRYIwiomQbCPj7wWQ&usqp=CAU',
    caption: 'This is the first photo',
  },
  {
    src: 'https://34travel.me/media/upload/images/2018/july/monocle/6RVr-xCGwzc.jpg',
    caption: 'This is the second photo',
  },
  {
    src: 'https://34travel.me/media/posts/5b59d26904ecf-940.jpg',
    caption: 'This is the third photo',
  },
];

function PhotoSlider() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex(currentPhotoIndex - 1);
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex(currentPhotoIndex + 1);
  };

  return (
    <div className="photo-slider">
      <button
        className="previous-button"
        onClick={goToPreviousPhoto}
        disabled={currentPhotoIndex === 0}
      >
        Previous
      </button>
      <img
        className="photo"
        src={photos[currentPhotoIndex].src}
        alt={photos[currentPhotoIndex].caption}
      />
      <p className="caption">{photos[currentPhotoIndex].caption}</p>
      <button
        className="next-button"
        onClick={goToNextPhoto}
        disabled={currentPhotoIndex === photos.length - 1}
      >
        Next
      </button>
    </div>
  );
}

export default PhotoSlider;

