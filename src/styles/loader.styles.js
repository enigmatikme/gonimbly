import styled from 'styled-components/macro';
const colors = {
  darkP: "#57435B",
  midP: "#A37B8D",
  lightP: "#D7959A",
  yellow: "#D39559",
  lightB: "#A4CFC7",
  midB: "#7BC3CA",
  grey: "#D9E1CE",
  red: "#E57873",
};

const timeOfDayColors = {
  morning: {
    one: colors.lightP,
    two: colors.darkP,
    three: colors.grey,
    four: colors.white,
  },
  afternoon: {
    one: colors.grey,
    two: colors.yellow,
    three: colors.lightB,
    four: colors.midB,
  },
  evening: {
    one: colors.grey,
    two: colors.midP,
    three: colors.lightP,
    four: colors.red,
  },
}

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100%;
  padding-bottom: 115px;

  #ld4 {
    position: relative;
    display: flex;
    width: 25%;
    justify-content: space-between; }
  #ld4 div {
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }

  #ld4 div:nth-child(1) {
    animation: ld4 3s linear infinite 0s; }

  #ld4 div:nth-child(2) {
    animation: ld4 3s linear infinite 0.15s; }

  #ld4 div:nth-child(3) {
    animation: ld4 3s linear infinite 0.3s; }

  #ld4 div:nth-child(4) {
    animation: ld4 3s linear infinite 0.45s; }

  @keyframes ld4 {
    0% {
      opacity: 0;
      transform: scale(0.3);
      background: #59CD90;
      background: ${props => timeOfDayColors[props.timeOfDay].one}; 
    }
    25% {
      opacity: 1;
      transform: scale(1.8);
      background: #0072BB; 
      background: ${props => timeOfDayColors[props.timeOfDay].two}; 
    }
    50% {
      opacity: 0;
      transform: scale(0.3);
      background: #FE4A49; 
      background: ${props => timeOfDayColors[props.timeOfDay].three}; 
    }
    75% {
      opacity: 1;
      transform: scale(1.8);
      background: #FED766; 
      background: ${props => timeOfDayColors[props.timeOfDay].four}; 
    }
    100% {
      opacity: 0;
    }
  }
`;

export { LoaderContainer }