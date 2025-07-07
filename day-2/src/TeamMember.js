import React from 'react'
import PropTypes from 'prop-types';
import "./TeamMember.css";

const TeamMember = ({name, role, location}) => {
  return (
    <div className='team-card'>
        <h3>{name || "Unknown Member"}</h3>
       <p><strong>Role:</strong> {role || "Undefined"}</p>
<p><strong>Location:</strong> {location || "Notspecified"}</p>


        
    </div>
  )
}



TeamMember.propTypes = {
    name:PropTypes.string,
    role:PropTypes.string,
    location:PropTypes.string
};

export default TeamMember