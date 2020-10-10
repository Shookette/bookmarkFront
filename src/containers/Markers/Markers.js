import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FilterMarker from '../../components/molecules/FilterMarker/FilterMarker';
import ListingMarker from '../../components/organisms/Listing/ListingMarker';
import Page from '../../layout/Page';
import { deleteMarker, getMarkers } from '../../services/api.services';
import './Markers.css';

const Markers = ({ location, history }) => {
  const { t } = useTranslation(); 
  const [ markerList, setMarkerList ] = useState([]);
  const [ markerListFiltered, setMarkerListFiltered ] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getMarkers();
      setMarkerList(data);
    })()
  }, []);
  
  useEffect(() => {
    setMarkerListFiltered(markerList);
  }, [ markerList ])

  const handleFilter = event => {
    const text = event.target.value;
    const filter = markerList.filter(marker => marker.title.includes(text));
    setMarkerListFiltered(filter);
  }

  const handleDelete = async id => {
    await deleteMarker(id);
  }

  return (
    <Page location={location} history={history}>
      <div className="markers_content">
        <h2 className="markers_title">{t('markers.title')}</h2>
        <FilterMarker handleOnChangeFilter={handleFilter} />
        <ListingMarker markers={markerListFiltered} handleDeleteAction={handleDelete} />
      </div>
    </Page>
  )
}

export default Markers
