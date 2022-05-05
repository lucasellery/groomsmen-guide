import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;


  gap: 30px;

  .little-tips-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 20px;
  }

  .little-tips-item-labels {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .little-tips-item-sentences p{
    font-family: Inter;
    font-size: 11px;
    margin-left: 10px;
  }
`;

export const ItemTitle = styled.span`
  font-size: 18px;
  font-family: 'Oleo Script Swash Caps', sans-serif;
  white-space: wrap;
`;