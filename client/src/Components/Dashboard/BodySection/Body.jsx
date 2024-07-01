import React from 'react'
import './body.css'
import Top from './TopSection/Top'
import Services from './ServicesSection/Services'
import Graph from './GraphSection/Graph'
import Files from './FilesSection/Files'

const Body = () => {
  return (
    <div className='mainContent'>
      <Top />
        <div className="bottom">
          <div className='Services'><Services /></div>
          <div className='Graph'><Graph /></div>
        </div>
        <div className="Files">
        <Files />
        </div>
    </div>
  )
}

export default Body