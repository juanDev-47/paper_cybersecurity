import React from 'react'

const List = ({elements}) => {
  return (
      <ol className='text-justify px-8 list-decimal'>
        {elements.map((element) => 
          <li key={element.id} className='my-4'>{element.text}</li>
        )}
      </ol>
  )
}

export default List