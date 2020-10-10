import React from 'react';
import { Link } from 'react-router-dom';
import './MarkerLink.css';

const MarkerLink = ({ link, text }) => {
  return <Link to={link} className="marker-link_link">{text}</Link>;
}

export default MarkerLink