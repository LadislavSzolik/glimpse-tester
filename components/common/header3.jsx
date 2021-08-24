import React from 'react';

const Header3 = ({ children, className }) => {
  return (
    <h3
      className={[
        'text-lg font-medium leading-6 text-gray-900',
        className,
      ].join(' ')}
    >
      {children}
    </h3>
  );
};

export default Header3;
