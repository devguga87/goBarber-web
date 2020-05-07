import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(
      100% + 12px
    ); /*o 100 % deixa colado +12 px deixa um pouco acima*/
    left: 50%; /*hack para centralizar*/
    transform: translateX(-50%); /*para centralizar de vez*/
    color: #321e38;

    /*flechinha indicando o erro*/
    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent; /*senao mostraria um quadrado*/
      border-width: 6px 6px 0 6px; /*triangulo*/
      top: 100%;
      position: absolute;
      left: 50%; /*hack para centralizar*/
      transform: translateX(-50%); /*para centralizar de vez*/
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
