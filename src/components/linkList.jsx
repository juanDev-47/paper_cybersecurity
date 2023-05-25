import React from 'react';

const Linklist = ({ elements, listType }) => {
  const style =
    listType === 'ordered' ? 'list-decimal px-8 w-4/5' : 'list-disc px-8 w-4/5';
  return (
    <div className='flex justify-center items-center text-lg text-black mb-6'>
      <ol className={style}>
        {elements.map((element) => (
          <li key={element.id} className='my-4'>
            <a
              href={element.link}
              target='_blank'
              rel='noreferrer'
              className='underline hover:decoration-wavy'
            >
              {element.text}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Linklist;
