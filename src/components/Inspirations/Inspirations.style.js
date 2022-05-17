import styled from 'styled-components';

export const InspirationContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled.span`
  font-family: 'Parisienne';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 23px;

  margin-bottom: 5px;

  color: #2D3047;
  }
`;

export const More = styled.span`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 23px;
`;

export const GroomsmenImageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 2rem;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const BridesmaidImageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 75%;
  height: auto;
  object-fit: cover;
`;
