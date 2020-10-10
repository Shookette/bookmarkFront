import React, { useState, useEffect } from 'react';
import './MarkerContent.css';

const MarkerContent = ({ type, url }) => {
  const [ realUrl, setRealUrl ] = useState(url);

  useEffect(() => {
    if (type === 'video') {
      const urlSplit = url.split('/');
      const videoId = urlSplit[urlSplit.length - 1];
      setRealUrl(`https://player.vimeo.com/video/${videoId}`);
    } else {
      setRealUrl(url);
    }
  }, [ type, url ])

  const renderMediaByType = () => {
    if (type === 'video') {
      return (
        <iframe 
          src={realUrl} 
          className="marker-content_element"
          width="480" 
          height="260" 
          frameborder="0" 
          allow="autoplay; fullscreen"
          allowfullscreen />
      )
    } else {
      return <a href={realUrl} target="blank"><img className="marker-content_element" src={realUrl} /></a>
    }
  }

  return (
    <div key={url} className="marker-content_container">
      {renderMediaByType()}
    </div>
  );
}

export default MarkerContent