import React from 'react'

const FormRouter = ({ step, selected, component: Component }) => {
  return <Component step={step} selected={selected} />
}

export default FormRouter
