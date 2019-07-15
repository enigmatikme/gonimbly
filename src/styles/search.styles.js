import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  &.open {
    form {
      width: 100%;
    }
  }

  form {
    transition: all .3s ease-in-out;
    position: absolute;
    width: 0;
    bottom: 0;
    right: 0;
    border-bottom: solid 1px white;
    padding-bottom: 5px;

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
    right: 0;
    transform: rotate(45deg);
    font-size: 20px;
    transition: transform .3s ease;

    &.open {
      transform: rotate(0deg);
    }

    path {
      fill: white;
      stroke-width: 1;
    }
  }

  .error {
    position: absolute;
    bottom: -20px;
    left: 0;
    color: white;
    font-size: 12px;

    p {
      margin: 0;
    }
  }
`;

export { Container }