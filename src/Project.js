import React from 'react';
import './Project.css';
import LikeCounter from './LikeCounter.js';

function Project(props) {
  return (
    <div className="Project">
      <img src={props.image} width="300" height="200" alt="#" />
      <h3>{props.title}</h3>
      <a href={props.link}>Link to project</a>
      <LikeCounter />
    </div>
  )
};

export default Project;