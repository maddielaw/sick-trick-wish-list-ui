import React from 'react';
import '../TrickCard/TrickCard.css'

const TrickCard = ({ stance, name, obstacle, tutorial}) => {
  return (
    <div className="trick-card">
      <p>{stance}{name}</p>
      <p>{`Obstacle: ${obstacle}`}</p>
      <p>{`Link to tutorial: ${tutorial}`}</p>
    </div>
  )

}




export default TrickCard;
