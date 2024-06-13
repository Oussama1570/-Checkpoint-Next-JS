import React from 'react';
import './AreaForm.css'

const BeautifulTextarea = ({ label, name, placeholder, minRows = 5 }) => {
  return (


    <div className="beautiful-textarea-container"> {/* Optional container */}
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className="beautiful-textarea"
        rows={minRows}
        
          />
    </div>
  );
};

export default BeautifulTextarea;