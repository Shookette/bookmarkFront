import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AddMarker from '../../components/molecules/AddMarker/AddMarker';
import FilterMarker from '../../components/molecules/FilterMarker/FilterMarker';
import ListingMarker from '../../components/organisms/Listing/ListingMarker';
import Page from '../../layout/Page';
import { deleteMarker, getMarkers, postMarker } from '../../services/api.services';
import { filterOnAllInput } from '../../services/common';
import './Markers.css';

const Markers = ({ location, history }) => {
  const { t } = useTranslation(); 
  const [ markerList, setMarkerList ] = useState([]);
  const [ markerListFiltered, setMarkerListFiltered ] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getMarkers();
      setMarkerList(!!data.data ? data.data : []);
    })()
  }, []);
  
  useEffect(() => {
    setMarkerListFiltered(markerList);
  }, [ markerList ])

  const handleFilter = event => {
    const text = event.target.value;
    const filter = filterOnAllInput(markerList, text);
    setMarkerListFiltered(filter);
  }

  const handleDelete = async id => {
    await deleteMarker(id);
    const data = await getMarkers();
    setMarkerList(!!data && !!data.data ? data.data : []);
  }

  const handleAdd = async data => {
    const newPost = await postMarker(data);
    if (!!newPost.data) {
      setMarkerList([ ...markerList, newPost.data]);
    }
  }
 
  return (
    <Page location={location} history={history}>
      <div className="markers_content">
        <h2 className="markers_title">{t('markers.title')}</h2>
        <AddMarker handleAdd={handleAdd} />
        <FilterMarker handleOnChangeFilter={handleFilter} />
        <ListingMarker markers={markerListFiltered} handleDeleteAction={handleDelete} />
      </div>
    </Page>
  )
}

export default Markers
