import React from 'react';
import { useTranslation } from 'react-i18next';
import './FilterMarker.css';

const FilterMarker = ({handleOnChangeFilter}) => {
  const { t } = useTranslation();
  return (
    <input 
      className="filter-marker_input" 
      onChange={handleOnChangeFilter}
      placeholder={t('filterMarker.placeholder')}
    />
  )
};

export default FilterMarker;