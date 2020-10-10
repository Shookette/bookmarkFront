import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import MarkerContent from '../../components/molecules/MarkerContent/MarkerContent';
import Page from '../../layout/Page';
import { getMarker } from '../../services/api.services';
import './Marker.css';

const Marker = ({ location, history }) => {
  const { id } = useParams();
  const [ marker, setMarker ] = useState({});
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const data = await getMarker(id);
      setMarker(data);
    })()
  })

 
  return (
    <Page location={location} history={history}>
      <div className="marker_container">
        <MarkerContent type={marker.type} url={marker.url} />
        <h2 className="marker_title">{marker.title}</h2>
        <div className="marker_main">
          <h3>{t('marker.title.principal')}</h3>
          <div>{t('marker.element.url')} <span className="marker_element--bold">{marker.url}</span></div>
          <div>{t('marker.element.type')} <span className="marker_element--bold">{marker.type}</span></div>
          <div>{t('marker.element.author')} <span className="marker_element--bold">{marker.author}</span></div>
          <div>{t('marker.element.date')} <span className="marker_element--bold">{marker.date}</span></div>
        </div>
        <div className="marker_main">
          <h3>{t('marker.title.optional')}</h3>
          <div>{t('marker.element.width')} <span className="marker_element--bold">{marker.width}</span></div>
          <div>{t('marker.element.height')} <span className="marker_element--bold">{marker.height}</span></div>
          <div>{t('marker.element.length')} <span className="marker_element--bold">{marker.length}</span></div>
        </div>
        <div className="marker_main">
          <h3>{t('marker.title.keyword')}</h3>
          <div>{marker.keyword}</div>
        </div>
      </div>
    </Page>
  )
}

export default Marker;