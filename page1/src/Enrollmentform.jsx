
import React from 'react';

const Enrollmentform = ({ onClose }) => {
    return (
        <div className="enrollment-form">
            <h2>Enrollment Form</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Mobile number
                    <input type="number" name="number" required />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Enrollmentform;
