import styled from "styled-components";

interface Props{
    selected: boolean;
}

export const Parcelas = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div{
      background: gray;
      width: 200px;
      height: 200px;
      color: #fff;
      margin: 1rem auto;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      padding: 5px;
      cursor: pointer;

      > div{
          display: flex;
      }
  }
`;

export const Parcela = styled.div<Props>`
   background: ${p => p.selected ? 'blue' : 'red'};
`