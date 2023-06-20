
import './App.css';

import React from 'react'
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div>
      <Banner />
      <div className='container'>

        <div className="row ">
          <div className="col"><Exhibit /></div>
          <div className="col"><Exhibit /></div>
          <div className="col"><Exhibit /></div>

        </div>
      </div>
    </div>
  )
}

export default App