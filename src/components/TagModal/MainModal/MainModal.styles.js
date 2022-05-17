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
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    color: #2D3047;

    margin-left: 10px;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const ItemTitle = styled.span`
  font-family: 'Parisienne', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 14px;

  white-space: wrap;

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;
