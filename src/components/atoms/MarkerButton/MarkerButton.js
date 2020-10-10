import React from 'react';
import './MarkerButton.css';


const MarkerButton = ({ text, handleAction, isLarge = false }) => {
  const markerClassName = `marker-button_button${isLarge ? ' marker-button_button--large' : ' marker-button_button--small' }`;

  return (
    <button className={markerClassName} onClick={handleAction}>
      {text}
    </button>
  );
}

export default MarkerButton