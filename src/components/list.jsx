import React from 'react';

const ListStyle = {
  ordered: 'list-decimal px-8 w-4/5',
  unordered: 'list-disc px-8 w-4/5',
  none: 'list-none px-8 w-4/5',
};

const List = ({ elements, listType }) => {
  const style = ListStyle[listType];
  return (
    <div className='flex justify-center items-center text-lg text-black mb-6'>
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
