import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { unSplash } from "./unSplash";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import Spinner from "./components/Loader/Loader.jsx";
import LoadMoreButton from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";

import "./App.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchImage, setSearchImage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (image) => {
    if (!image.trim()) {
      setError("Please enter a search term.");
      return;
    }

    setSearchImage(image);
    setPage(1);
    setArticles([]);
  };

  useEffect(() => {
    if (searchImage === "") {
      return;
    }
    async function getImage() {
      setLoading(true);
      setError(null);
      try {
        const data = await unSplash(searchImage, page);

        if (data.results.length === 0) {
          setError("No images found for this search term.");
        } else {
          setArticles((prevArticles) => {
            return [...prevArticles, ...data.results];
          });
        }
      } catch (error) {
        setError("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    getImage();
  }, [page, searchImage]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (modalIsOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalIsOpen]);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Spinner loading={loading} />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery items={articles} onImageClick={openModal} />
      {articles.length > 0 && (
        <LoadMoreButton onClick={() => setPage(page + 1)} />
      )}
      <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {selectedImage ? selectedImage.urls.regular : ""}
      </ImageModal>
    </>
  );
}
