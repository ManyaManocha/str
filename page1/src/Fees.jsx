import React from 'react';

const Fees = () => {
  return (            
    <div className="fee-card">
      <div className="fee-header">
        <h2>Program Fee</h2>
        <pre>(Rs. in Lacs)</pre>
      </div>
      <div className="fee-details">
        <div className="fee-item">
          <h3>1st Year Non Sponsored Semester</h3>
          <pre>1.22</pre>
        </div>
        <div className="fee-item">
          <h3>1st Year Sponsored Semester Fee</h3>
          <pre>1.68</pre>
        </div>
      </div>
    </div>
  );
}

export default Fees;

