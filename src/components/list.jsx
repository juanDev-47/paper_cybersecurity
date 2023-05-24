import React from 'react';

const List = ({ elements, listType }) => {
  const style =
    listType === 'ordered' ? 'list-decimal px-8 w-4/5' : 'list-disc px-8 w-4/5';
  return (
    <div className='flex justify-center items-center'>
      <ol className={style}>
        {elements.map((element) => (
          <li key={element.id} className='my-4'>
            {element.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default List;
