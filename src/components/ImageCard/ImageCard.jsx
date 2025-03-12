const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
