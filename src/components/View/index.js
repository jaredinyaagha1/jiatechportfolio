import Home from './Home/index.js';
import About from './About/index.js';
import Portfolio from './Portfolio/index.js';
// import Services from './Services/index.js';
import Contact from './Contact/index.js';

function View() {
    return (
        <div className="View ">

            <style type='text/css'>
                {`
            .card {
                background-color: rgba(0, 0, 0, 0.1);
            }
            `}

            </style>
            <Home id="home" />
            <About id="about" />
            <Portfolio id="portfolio" />
            {/* <Services /> */}
            <Contact id="contact" />
        </div>
    )
}

export default View;