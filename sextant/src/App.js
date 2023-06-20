import React from 'react'
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Address from './components/Address';

function App() {
  return (
    <div>
      <Banner />
      <div className='container'>

        <div className="row ">
          <div className="col mb-5"><Exhibit name="Public IPv4 Address">
            <Address url='https://api.ipify.org?format=json' />
          </Exhibit>
          </div>
          <div className="col mb-5"><Exhibit name="Public IPv4(v6) Address">
            <Address url='https://api64.ipify.org?format=json' />
          </Exhibit>
          </div>

          <div className="col mb-5"><Exhibit /></div>

        </div>
      </div>
    </div>
  )
}

export default App