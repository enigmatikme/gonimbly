import styled from 'styled-components/macro'



const CityListContainer = styled.div`
  div {
    border: white solid 1px;
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;
    color: white;
    position: relative;

    min-width: 180px;
    border-radius: 20px;
    transition: box-shadow .3s ease;

    &:last-of-type {
      border-bottom: white solid 1px;
    }

    &.active, &:hover {
      box-shadow: 0px 0px 0px 3px white;
    }

    &.loading {
      pointer-events: none;
    }
    p {
      position: absolute;
      margin: 0;
      right: 12px;
      top: 12px;
  }
    }
  }
`; 

export { CityListContainer };