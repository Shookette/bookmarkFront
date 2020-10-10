import React from 'react';
import TopBar from '../components/organisms/TopBar/TopBar';

const Page = ({ children, location, history }) => {

  return (
    <div className="layout">
      <TopBar location={location} history={history}/>
      <main className="layout_wrapper">
        {children}
      </main>
    </div>
  )
}

export default Page;