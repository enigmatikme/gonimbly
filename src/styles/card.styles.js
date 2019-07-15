import styled from 'styled-components/macro';

const CardContainer = styled.div`
  width: 375px;
  height: 100%;
  display: flex;
  border-radius: 20px;
  position: relative;
  -webkit-box-shadow: 7px 7px 42px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 7px 7px 42px 1px rgba(0,0,0,0.75);
  box-shadow: 7px 7px 42px 1px rgba(0,0,0,0.75);

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    path {
      fill: white !important;
    }    
  }

  .city {
    position: absolute;
    padding-bottom: 2px;
    top: 20px;
    left: 20px;
    font-size: 10px;
    color: white;
    font-weight: 100;
    transform: translateZ(1px);
    margin: 0;

    p {
      margin: 0;
    }
  }
`;

const WeatherContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  transform: translateZ(1px);
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0; 
  bottom: 0;
  right: 0;
  left: 0;

  img {
    height: 100%;
    width: 100%;
    border-radius: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 20px 20px;
  transform: translateZ(1px);
  width: 100%;

`;
const Today = styled.div`
  text-align: center;
  h1 {
    margin: 0;
    font-size: 75px;
    font-weight: lighter;
    color: white;
    line-height: 70px;

    &.temp {
      &:after {
        content: "\\00b0"; 
        position: absolute;
      }
    }
  }

  h3 {
    margin: 0;
    font-size: 20px;
    color: white;
  }
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 140px;
  .day-row {
    margin-bottom: 15px;
    min-height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1.5px white;
    color: white;
    font-weight: bold;

    .details {
      text-align: right;
      display: flex;
      flex-direction: column;

      p {
        margin: 0;

        &.state {
          font-weight: normal;
        }
      }
    }
  }

  .temp {
    &:after {
      content: "\\00b0"; 
    }
  }
`;

export {
  CardContainer,
  Today,
  DayContainer,
  ImageContainer,
  ContentContainer,
  WeatherContainer,
};