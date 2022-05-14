import styled from 'styled-components';

export const InspirationContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const BridesmaidImageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Image = styled.img`
  width: 75%;
  height: auto;
  object-fit: cover;
`;
