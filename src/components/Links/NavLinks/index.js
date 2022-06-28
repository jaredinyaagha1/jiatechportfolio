import React, { useState } from 'react';
import { Link } from 'react-scroll';
// import { Dropdown } from 'react-bootstrap';
// import Nav from "../../HeadersFooters/Nav/index.js";

function NavLinks(props) {

    const [NavLinks] = useState([
        {
            title: <svg xmlns="http://www.w3.org/2000/svg" width="" height="" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>,
            id: 'about',
            url: '#',
            cName: 'light-shade'
        }, {
            title: <svg xmlns="http://www.w3.org/2000/svg" width="" height="" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
            </svg>,
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
            title: <svg xmlns="http://www.w3.org/2000/svg" width="" height="" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>,
            id: 'contact',
            url: '#',
            cName: 'light-shade'
        }, {
            title: <svg xmlns="http://www.w3.org/2000/svg" width="" height="" fill="currentColor" class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
            </svg>,
            id: 'resume',
            url: '#',
            cName: 'light-shade '
        }

    ]);
    // const { isMobile } = props;
    // if (isMobile) {
    //     return (
            // <Button variant="outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
            //     <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            // </svg></Button>
            // <Dropdown>
            //     <Dropdown.Toggle variant="outline-light" id="dropdown-basic"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
            //         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            //     </svg>
            //     </Dropdown.Toggle>

            //     <Dropdown.Menu>
            //         <Dropdown.Item href="#About">About</Dropdown.Item>
            //         <Dropdown.Item href="#/action-2">Projects</Dropdown.Item>
            //         <Dropdown.Item href="#/action-3">Contact Me</Dropdown.Item>
            //     </Dropdown.Menu>
            // </Dropdown>
            // <ul>
            //     {NavLinks.map((item, index) => (
            //         <li className="px-2 py-2 d-none d-md-inline-block " key={index}>
            //             <a className={item.cName} href={item.url}>
            //                 {item.title}
            //             </a>
            //         </li>
            //     ))}
            // </ul>
    //     );
    // }
    // else {
        return (
            <ul>
                {NavLinks.map((item, index) => (
                    <li className="px-2 py-2 d-none d-md-inline-block " key={index}>
                        <Link
                            activeClass="active"
                            to={item.id}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className={item.cName}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
// };
export default NavLinks;
