import React from 'react'

const button = ({ name, link }) => {
    return (
        <div className='float-right'>
            <a href={link} className='bg-main text-white px-6 py-2 rounded-full text-xl mr-5 mt-10'>{name}</a>
        </div>
    )
}

export default button