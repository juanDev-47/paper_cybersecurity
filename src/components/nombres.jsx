import React from 'react'

const Nombres = (props) => {
  const { nombre, texto1, } = props;
  return (
    <div className='w-full '>
      <div className='w-4/5 mx-auto'>
        <p className=''>{nombre}</p>
        <p>{texto1}</p>
      </div>
    </div>
  )
}

export default Nombres