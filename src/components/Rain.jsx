import React, { useEffect } from 'react';
import { Container } from '../styles/rain.styles';

const Rain = ({drops}) => {
  // function to generate a random number range.
  function randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }

  // function to generate drops
  function startRain() {
    const rainSection = document.getElementById('Rain');

    for(let i = 1; i < drops; i++) {
      const dropLeft = randRange(0, 1600);
      const dropTop = randRange(-1000, 1400);

      const drop = document.createElement('div');

      drop.setAttribute('class', 'drop');
      drop.setAttribute('id', `drop${i}`);

      rainSection.appendChild(drop);

      drop.style.left = `${dropLeft}px`;
      drop.style.top = `${dropTop}px`;
    }
  }

  useEffect(() => {
    startRain();
  }, [])

  return (
    <Container id="Rain"></Container>
  )
};

export default Rain;