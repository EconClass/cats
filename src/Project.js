import React from 'react';
import './Project.css'

function Project(props) {
  return (
    <div className="project">
      <img src={props.image} width="300" height="200" alt="#" />
      <h3>{props.title}</h3>
      <a href={props.link}>Link to project</a>
    </div>
  )
};

export default Project;