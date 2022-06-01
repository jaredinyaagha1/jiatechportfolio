import React from 'react';
import { Button, Container } from 'react-bootstrap';

function Resume() {
    const downloadResume = () => {
        window.location.href = "../../../src/assets/resume.pdf"
    }
    return (
        <div>
            <h3 id="resume">Resume</h3>
            <Button onClick={downloadResume}>
                <Container>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
            </svg>
            Download Resume pls
                </Container>
            </Button>
            {/* <h4>Previous Work Experiences:</h4>
            <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h4>Front end Specialities:</h4>
            <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h4>Back end Specialities:</h4>
            <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
        </div>
    );
}

export default Resume;