import React from 'react';
import './Project.css';
import LikeCounter from './LikeCounter.js';

function Project(props) {
  return (
    <div className="Project">
      <a href={props.link}>
        <img src={props.image} width="300" height="200" alt="#" />
      </a>
      <h3>{props.title}</h3>
      <LikeCounter />
    </div>
  )
};

export default Project;