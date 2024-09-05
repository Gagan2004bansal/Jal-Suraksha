import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const interval = 5000;

  const images = [
    "https://i.ytimg.com/vi/8aMRJ6_X5-k/maxresdefault.jpg",
    "https://static.toiimg.com/thumb/msid-74972140,width-1280,height-720,resizemode-4/74972140.jpg",
    "https://static.vecteezy.com/system/resources/previews/027/206/229/non_2x/set-of-3-posters-flat-line-modern-style-with-phrases-quotes-ecology-motivation-save-water-save-life-do-not-waste-hand-drawn-illustrations-of-human-hand-drop-tap-prohibition-sign-vector.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  if (images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-1000 ease-in-out transform ${
            index === currentIndex
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        ></div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
