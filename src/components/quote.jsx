import React from 'react';

const Quote = ({
  value = ''
}) => (
  <div>
    <div className='w-4/5 mx-auto my-2'>
      <p className='personal-info-titulo text-xl text-black my-6 border-solid border-4 border-slate-800 p-5'>{value}</p>
    </div>
  </div>
);

export default Quote;
