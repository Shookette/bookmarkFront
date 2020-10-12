import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import MarkerContent from '../../components/molecules/MarkerContent/MarkerContent';
import Page from '../../layout/Page';
import { getMarker, patchMarker } from '../../services/api.services';
import { useForm } from 'react-hook-form';
import './Marker.css';

const Marker = ({ location, history }) => {
  const { id, edit } = useParams();
  const { register, handleSubmit } = useForm();
  const { t } = useTranslation();
  const [ marker, setMarker ] = useState({});

  const isDisabled = edit === undefined;

  useEffect(() => {
    (async () => {
      const data = await getMarker(id);
      setMarker(!!data && !!data.data ? data.data : {});
    })()
  }, [ id ]);

  const onSubmit = data => patchMarker(id, data);

  return (
    <Page location={location} history={history}>
      <div className="marker_container">
        <MarkerContent type={marker.type} url={marker.url} title={marker.title} />
        <h2 className="marker_title">{marker.title}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="marker_main">
            <h3>{t('marker.title.principal')}</h3>
            <div className="marker_form-control">
              <label className="marker_element--bold">{t('marker.element.url')}</label>
              <input name="url" ref={register} disabled={isDisabled} defaultValue={marker.url}/>
            </div>
            <div className="marker_form-control">
              <label className="marker_element--bold">{t('marker.element.type')}</label>
              <input name="type" ref={register} disabled={isDisabled} defaultValue={marker.type}/>  
            </div>
            <div className="marker_form-control">
              <label className="marker_element--bold">{t('marker.element.author')}</label>
              <input name="author" ref={register} disabled={isDisabled} defaultValue={marker.author}/>
            </div>
            <div className="marker_form-control">
              <label className="marker_element--bold">{t('marker.element.date')}</label>
              <input type="date" name="date" ref={register} disabled={isDisabled} defaultValue={marker.date}/>
            </div>
          </div>
          <div className="marker_main">
            <h3>{t('marker.title.optional')}</h3>
            <div className="marker_form-control">
              <label className="marker_element--bold">{t('marker.element.width')}</label>
              <input name="width" ref={register} disabled={isDisabled} defaultValue={marker.width}/>
            </div>
            <div className="marker_form-control">
              <label className="marker_element--bold">{t('marker.element.height')}</label>
              <input name="height" ref={register} disabled={isDisabled} defaultValue={marker.height}/>
            </div>
            { marker.type === 'video' && (
              <div className="marker_form-control">
                <label className="marker_element--bold">{t('marker.element.length')}</label>
                <input name="length" ref={register} disabled={isDisabled} defaultValue={marker.length}/>
              </div>
            )}
          </div>
          <div className="marker_main">
            <h3>{t('marker.title.keyword')}</h3>
            <div className="marker_form-control">
              <label className="marker_element--bold">{t('marker.element.keyword')}</label>
              <input name="keyword" ref={register} disabled={isDisabled} defaultValue={marker.keyword}/>
            </div>
            <input type="submit" disabled={isDisabled} />
          </div>
        </form>
      </div>
    </Page>
  )
}

export default Marker;