import React from 'react'

const button = ({nombre}) => {
    return (
        <button className='bg-white text-black px-6 py-2 rounded-full'>
            {nombre}
        </button>
    )
}

export default button