import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import Nav from "../../HeadersFooters/Nav/index.js";

function MenuLinks(props) {

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
    const { isMobile } = props;
    if (isMobile) {
        return (
            <Button variant="outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg></Button>
            // <ul>
            //     {menuLinks.map((item, index) => (
            //         <li className="px-2 py-2 d-none d-md-inline-block " key={index}>
            //             <a className={item.cName} href={item.url}>
            //                 {item.title}
            //             </a>
            //         </li>
            //     ))}
            // </ul>
        );
    }
    else {
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
    }
};
export default MenuLinks;
