import React from 'react';
import { useTranslation } from 'react-i18next';
import MarkerButton from '../../atoms/MarkerButton/MarkerButton';
import './TopBar.css'; 

const TopBar = ({ location, history }) => {
  const { t } = useTranslation(); 
  const goBackAction = () => history.goBack();

  const renderBackButton = () => {
    if (location.pathname === '/markers') {
      return;
    }

    return <MarkerButton handleAction={goBackAction} text={t('topBar.back')} isLarge />;
  }

  return (
    <header className="top-bar">
      {renderBackButton()}
      <h1 className="top-bar_title">{t('topBar.title')}</h1>
    </header>
  )
}

export default TopBar