import React from 'react';

const Informacion = ({
  value = ''
}) => (
  <div>
    <div className='w-4/5 mx-auto my-2'>
      <p className='personal-info-titulo'>{value}</p>
    </div>
  </div>
);

export default Informacion;
