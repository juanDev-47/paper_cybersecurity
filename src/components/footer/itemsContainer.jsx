import React from 'react';
import { links } from '../navbar/myLinks'


const ItemsContainer = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:px-8 px-16 py-16'>
            {links.map((Link) => (
                <ul>
                    <h1 className='mb-1 font-semibold uppercase text-xl'>{Link.name}</h1>
                    <div>
                        {Link.submenu &&
                            <div>
                                {Link.sublinks.map((sublinks, idx1) => (
                                    <div key={idx1}>
                                        {sublinks.sublinks.map((mySublinks, idx2) => (
                                            <li key={idx2}>
                                                <a href={mySublinks.link} className='text-gray-400 hover:text-teal-400 text-sm duration-300 cursor-pointer leading-6'>{mySublinks.name}</a>
                                            </li>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </ul>
            ))}
        </div>
    )
};

export default ItemsContainer;