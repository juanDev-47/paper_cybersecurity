import React from 'react';

const Informacion = ({
  value = ''
}) => (
  <div>
    <div className='w-4/5 mx-auto my-5'>
      <p className='personal-info-titulo text-lg text-black'>{value}</p>
    </div>
  </div>
);

export default Informacion;
