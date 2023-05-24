import React, { useEffect, useState } from 'react';
import { linksES } from './myLinks';
import { linksEN } from './myLinksEN';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';

const Navlinks = () => {
  const [heading, setHeading] = useState('');
  const [links, setLinks] = useState(linksES);
  const [names, setNames] = useState([
    'Planteamiento',
    'Metodología',
    'Resultados',
  ]);

  const { traslate } = useContextProvider();

  useEffect(() => {
    if (traslate) {
      setNames(['Approach', 'Methodology', 'Results']);
      setLinks(linksEN);
      i18n.changeLanguage('en');
    } else {
      setNames(['Planteamiento', 'Metodología', 'Resultados']);
      setLinks(linksES);
      i18n.changeLanguage('es');
    }
  }, [traslate]);

  return (
    <>
      {links.map((link, idx) => (
        <div key={idx}>
          <div className='px-3 text-left md:cursor-pointer group'>
            <h1
              className='py-7 cursor-pointer flex justify-between items-center md:pr-0 pr-5'
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading('')
              }
            >
              {link.name}
              <span
                className={`text-xl md:mt-1 md:ml-2 ${
                  link.name === names[0]
                    ? 'inline'
                    : 'hidden' && link.name === names[1]
                    ? 'inline'
                    : 'hidden' && link.name === names[2]
                    ? 'inline'
                    : 'hidden'
                }`}
              >
                <ion-icon
                  name={`${
                    heading === link.name ? 'chevron-up' : 'chevron-down'
                  }`}
                ></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className='z-50 absolute top-20 hidden group-hover:md:block hover:md:block'>
                  <div className='py-3'>
                    <div className='w-4 h-4 left-3 absolute mt-1 bg-main rotate-45'></div>
                  </div>
                  <div className='bg-main p-5 w-full '>
                    {link.sublinks.map((mysublinks, idx1) => (
                      <div key={idx1}>
                        {mysublinks.sublinks.map((slink, idx2) => (
                          <li
                            className='text-sm text-gray-600 my-2.5 block'
                            key={idx2}
                          >
                            <a
                              href={`${slink.link}`}
                              rel='noreferrer'
                              className='hover:text-white hover:font-bold'
                            >
                              {slink.name}
                            </a>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
            {/* Sublinks */}
            {link.sublinks?.map((slinks, idx) => (
              <div key={idx}>
                <div>
                  <div>
                    {slinks.sublinks.map((slink, idx2) => (
                      <li className='py-3 pl-14' key={idx2}>
                        <a
                          href={`${slink.link}`}
                          rel='noreferrer'
                          className='hover:font-bold'
                        >
                          {slink.name}
                        </a>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
