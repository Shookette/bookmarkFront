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
        <div className="markers_info">
          <span className="markers_info--ellipsis">{marker.title}</span>
          <span><a href={marker.url} alt={marker.url} target="blank">{t('listingMarker.link')}</a></span>
          <span className="markers_info--ellipsis">{marker.author}</span>
          <span>{marker.type}</span>
          <span className="markers_info--ellipsis">{marker.date}</span>
        </div>
        <div className="markers_button">
          <MarkerLink link={`/marker/${marker.id}`} text={t('listingMarker.moreDetail')} />
          <MarkerLink link={`/marker/${marker.id}/edit`} text={t('listingMarker.edit')} />
          <MarkerButton handleAction={() => handleDeleteAction(marker.id)} text={t('listingMarker.delete')} />
        </div>
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