import React from 'react'
import Header1 from '../common/header1'

const LocationForm = ({ selected, step }) => {
  if (parseInt(selected.id) !== step) return null
  return (
    <>
      <Header1>The property is locatedAt</Header1>
      <p className="py-10">Form content comes here</p>
    </>
  )
}

export default LocationForm
