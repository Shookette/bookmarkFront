import React from 'react'
import { useTranslation } from 'react-i18next'
import MarkerButton from '../../atoms/MarkerButton/MarkerButton';
import MarkerLink from '../../atoms/MarkerLink/MarkerLink';
import './ListingMarker.css';

const ListingMarker = ({ markers, handleDeleteAction }) => {
  const { t } = useTranslation();
  
  const renderMarkerRow = marker => {
    return (
      <div className="markers_row">
        <span>{marker.title}</span>
        <span><a href={marker.url} target="blank">{t('listingMarker.link')}</a></span>
        <span>{marker.author}</span>
        <span>{marker.type}</span>
        <span>{marker.date}</span>
        <MarkerLink link={`/marker/${marker.id}`} text={t('listingMarker.moreDetail')} />
        <MarkerLink link={`/marker/${marker.id}/edit`} text={t('listingMarker.edit')} />
        <MarkerButton handleAction={() => handleDeleteAction(marker.id)} text={t('listingMarker.delete')} />
      </div>
    );
  }

  return (
    <div className="listing-marker_container">
      {markers.map(marker => renderMarkerRow(marker))}
    </div>
  );
}

export default ListingMarker;