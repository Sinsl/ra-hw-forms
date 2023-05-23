import { useState } from "react";
import PropTypes from 'prop-types';
import { Photo } from "./Photo";
import { v4 as uuid } from "uuid";

export const PhotoContainer = ({url}) => {

  const [images, setImages] = useState([]);

  if (url.src !== '') {
    images.push({id: uuid(), url: url.src});
  }

  const onDeleteHandle = (id) => {
    url.src = '';
    setImages(images.filter((elem) => elem.id !== id));
  }

  return (
    <div className="foto-container">
      {images.length > 0 && images.map((elem) => 
      (<Photo key={elem.id} item={{id: elem.id, url: elem.url}} deleteHandle={onDeleteHandle}/>))}
    </div>
  );
};

PhotoContainer.propTypes = {
  url: PropTypes.object,
};
