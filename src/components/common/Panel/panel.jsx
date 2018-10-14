import CSSModules from 'react-css-modules'
import React from 'react'

import defaultStyles from './panel.css'

const Panel = ({children, name, style}) => {

  return (
  <div className={'panel'} style={style}>
    <h1 className='header'>{name}</h1>
    <div className='content'>
      {children}
    </div>
  </div>
)}

export default CSSModules(Panel, defaultStyles)
