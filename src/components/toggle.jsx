import React from 'react';
// @no-restricted-imports
import { useContextProvider } from '../context/contextProvider';

const Toggle = () => {
  const [isDark, setIsDark] = React.useState(true);
  const { setTraslate } = useContextProvider();

  React.useEffect(() => {
    if (isDark) {
      setTraslate(false);
    } else {
      setTraslate(true);
    }
  }, [isDark, setTraslate]);

  return (
    <div className='w-full flex pt-6 pl-20 '>
      <div className='lenguague-label'>Es</div>
      <label
        htmlFor='default-toggle'
        className='inline-flex relative items-center cursor-pointer'
      >
        <input
          onChange={() => setIsDark(!isDark)}
          type='checkbox'
          value=''
          id='default-toggle'
          className='sr-only peer'
        />
        <div className='w-11 h-6 after:pt-1 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ' />
      </label>
      <div className='lenguague-label'>En</div>
    </div>
  );
};

export default Toggle;
