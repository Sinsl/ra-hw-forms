import './photo.css';
import { PhotoForm } from './PhotoForm';
import { PhotoContainer } from './PhotoContainer';
import { useState } from 'react';

export const PhotoManager = () => {
  const [urlStr, setUrl] = useState({src: ''});

  const onSelectHandle = ({url}) => {
    setUrl({src: url})
  }

  return (
    <div className='foto'>
      <PhotoForm selectHandle={onSelectHandle}/>
      <PhotoContainer url={urlStr}/>
    </div>
  );
};
