import React from 'react';

const Header2 = ({ children, className }) => {
  return (
    <h2
      className={[
        'text-xl font-medium leading-6 text-gray-900',
        className,
      ].join(' ')}
    >
      {children}
    </h2>
  );
};

export default Header2;
