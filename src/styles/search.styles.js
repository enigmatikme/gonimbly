import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  form {
    transition: all .3s ease-in-out;
    position: absolute;
    width: 0;
    bottom: 0;
    right: 20px;
    border-bottom: solid 1px white;
    padding-bottom: 5px;
    &.open {
      width: 100%;
    }

    input {
      background: none;
      border: none;
      width: 100%;
      outline: none;
      color: white;
      font-size: 20px;
    }
  }

  .search-icon {
    position: absolute;
    bottom: 10px;
    right: 20px;
    transform: rotate(45deg);
    font-size: 20px;

    path {
      fill: white;
      stroke-width: 1;
    }
  }
`;

export { Container }