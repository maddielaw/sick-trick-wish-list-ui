import React from 'react';
import './TrickContainer.css';
import TrickCard from '../TrickCard/TrickCard'

const TrickContainer = ({tricks}) => {

  const listTricks = (tricks) => {
    return tricks.map(trick => {
      return <TrickCard stance={trick.stance} name={trick.name} obstacle={trick.obstacle} tutorial={trick.tutorial} />
    })

  }

  return (
    <section className="trick-container">
      {listTricks(tricks)}
    </section>

  )

}


export default TrickContainer;