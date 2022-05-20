import React, { useState } from 'react';
// import Nav from "../../HeadersFooters/Nav/index.js";

function MenuLinks() {

    const [menuLinks] = useState([
        {
            title: 'About',
            url: '#',
            cName: 'light-shade'
        }, {
            title: 'Projects',
            url: '#',
            cName: 'light-shade '
        },
        //  {
        //     title: 'Services',
        //     url: '#',
        //     cName: 'light-shade'
        // },
        {
            title: 'Contact Me',
            url: '#',
            cName: 'light-shade'
        }, {
            title: 'Resume',
            url: '#',
            cName: 'light-shade '
        }

    ]);

    return (
        <ul>
            {menuLinks.map((item, index) => (
                <li className="px-2 py-2 d-none d-md-inline-block " key={index}>
                    <a className={item.cName} href={item.url}>
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};
export default MenuLinks;
