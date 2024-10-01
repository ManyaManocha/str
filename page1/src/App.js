
import React, { useState } from 'react';
import './App.css';
import Logos from './Logos';
import Slider from './Slider';
import Navbar from './Navbar';
import Explain from './Explain';
import Divis from './Divis';
import Services from './Services';
import Courses from './Courses';
import Bca from './Bca';
import Fees from './Fees';
import Semesters from './Semesters';
import Mca from './Mca';
import Footer from './Footer';
import Enrollmentform from './Enrollmentform'; // Import the new component

function App() {
    const [showEnrollment, setShowEnrollment] = useState(false);

    const handleEnrollClick = () => {
        setShowEnrollment(true);
    };

    const handleCloseForm = () => {
        setShowEnrollment(false);
    };

    return (
        <>
            <div>
                <div className="logo-bar">
                    <div className="logo">
                        <a href="https://www.facebook.com/merakieduin/"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/company/merakiedu-in/"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/merakihighereducation/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UCU9IyNki1XX6jWFJRvpbFYA"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://in.pinterest.com/merakischoolofhighereducation/"><i className="fa-brands fa-pinterest"></i></a>
                        <button type="button" className='btn' onClick={handleEnrollClick}>ENROLL NOW</button>
                    </div>
                </div>
                <Logos />
                <Slider />
                <Navbar />
                <Courses />
                <Explain />
                <Divis />
                <Services />
                <Bca />
                <Fees />
                <Semesters />
                <Mca />
                <Fees/>
                <Semesters/>
                <Footer />
                
                {showEnrollment && (
                    <>
                        <div className="enrollment-overlay" onClick={handleCloseForm}></div>
                        <Enrollmentform onClose={handleCloseForm} />
                    </>
                )}
            </div>
        </>
    );
}

export default App;



