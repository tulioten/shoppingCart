import React from 'react';

const PageTitle = ({title}) => {
  return (
    <div className='page-title'>
      {title || 'Cart'}
    </div>
  );
};

export default PageTitle;
