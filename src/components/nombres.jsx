import React from 'react'

const Nombres = (props) => {
  const { name, text1, text2, text3, email } = props;
  return (
    <div className='py-4 text-center'>
      <div className=''>
        <p className='text-sm'>{name}</p>
        <p className='font-names'>{text1}</p>
        <p className='font-names'>{text2}</p>
        <p className='text-sm'>{text3}</p>
        <p className='text-sm'>{email}</p>
      </div>
    </div>
  )
}

export default Nombres