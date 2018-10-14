import CSSModules from 'react-css-modules'
import React from 'react'

import styles from './dropdown.css'

const Dropdown = ({options, value, onChange}) => (
  <div defaultName='dropdown'>
    <select value={value || 'test'} onChange={onChange}>
      <option value='test' className='defaultValue' disabled> -- select a format -- </option>
      {options.map((option) => {
        return <option key={option.name} value={option.value}>{option.name}</option>
      })}
    </select>
  </div>
)

export default CSSModules(Dropdown, styles)
