import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import './AddMarker.css';

const AddMarker = ({ handleAdd }) => {
  const { register, handleSubmit } = useForm();
  const { t } = useTranslation();

  const onSubmit = (data, e) => {
    e.target.reset();
    handleAdd(data);
  }

  return (
    <div className="add-marker_container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="add-marker_label">{t('addMarker.title')}</label>
        <input className="add-marker_input" name="url" ref={register} />
        <input className="add-marker_button" type="submit" value={t('addMarker.submit')} />
      </form>
    </div>
  )
}

export default AddMarker;