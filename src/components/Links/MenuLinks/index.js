import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Dropdown } from 'react-bootstrap';
// import Nav from "../../HeadersFooters/Nav/index.js";

function MenuLinks(props) {

    const [menuLinks] = useState([
        {
            title: 'About',
            id: 'about',
            url: '#',
            cName: 'light-shade'
        }, {
            title: 'Projects',
            id: 'portfolio',
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
            id: 'contact',
            url: '#',
            cName: 'light-shade'
        }, {
            title: 'Resume',
            id: 'resume',
            url: '#',
            cName: 'light-shade '
        }

    ]);
    const { isMobile } = props;
    if (isMobile) {
        return (
            // <Button variant="outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
            //     <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            // </svg></Button>
            <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#About">About</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Projects</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Contact Me</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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
                        {/* <a className={item.cName} href={item.url}>
                            {item.title}
                        </a> */}
                        <Link
                            activeClass="active"
                            to={item.id}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className={item.cName}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
};
export default MenuLinks;
