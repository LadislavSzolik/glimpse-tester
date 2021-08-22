import React from 'react'

const Header1 = ({ children, className }) => {
  return (
    <h1
      className={[
        'text-3xl font-bold leading-tight text-gray-900',
        className
      ].join(' ')}
    >
      {children}
    </h1>
  )
}

export default Header1
