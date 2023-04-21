import React, { useState } from 'react'
import { links } from './myLinks'

const Navlinks = () => {
    const [heading, setHeading] = useState('')
    return (
        <>
            {links.map((link) => (
                <div>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h1 className='py-7 cursor-pointer flex justify-between items-center md:pr-0 pr-5'
                            onClick={() => heading !== link.name ? setHeading(link.name) : setHeading('')}>
                            {link.name}
                            <span className={`text-xl md:mt-1 md:ml-2 ${link.name === 'Planteamiento' ? 'inline' : 'hidden'}`}>
                                <ion-icon name={`${heading === link.name ? 'chevron-up' : 'chevron-down'}`}></ion-icon>
                            </span>
                        </h1>
                        {link.submenu && (
                            <div>
                                <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                                    <div className='py-3'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-main rotate-45'></div>
                                    </div>
                                    <div className='bg-main p-5 w-full '>
                                        {link.sublinks.map((mysublinks) => (
                                            <div>
                                                {mysublinks.sublinks.map((slink) => (
                                                    <li className='text-sm text-gray-600 my-2.5 block'>
                                                        <a href="{slink.link}" className='hover:text-white hover:font-bold'>{slink.name}</a>
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
                    <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}
                    `}>
                        {/* Sublinks */}
                        {link.sublinks?.map((slinks) => (
                            <div>
                                <div>
                                    <div>
                                        {slinks.sublinks.map((slink) => (
                                            <li className='py-3 pl-14'>
                                                <a href="/" className='hover:font-bold'>{slink.name}</a>
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
    )
}

export default Navlinks