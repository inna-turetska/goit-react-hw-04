import ImageCard from "../ImageCard/ImageCard";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={styles.list}>
      {items.map((item, id) => (
        <li className={styles.card} key={id}>
          <div>
            <img
              className={styles.img}
              src={item.urls.small}
              alt={item.alt_description || "Image"}
              onClick={() => onImageClick(item)}
            />
            <p className={styles.text}>
              Likes: {item.likes} <br />
              Description: {item.alt_description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
