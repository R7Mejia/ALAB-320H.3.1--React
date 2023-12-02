import React from 'react';
import './Learner.css'; 

function Learner({ name, bio, scores }) {
  return (
    <div className='learner-container'>
      <h1 className='learner-name'>{name}</h1>
      <h2 className='learner-bio'>{bio}</h2>
      <ul>
        {scores.map((score, index) => (
          <li className='learner-score' key={index}>
            Date: {score.date}, Score: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Learner;