import styled from 'styled-components';

export const GroomsmenImageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BridesmaidImageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  z-index: 10;
`;

export const Image = styled.img`
  width: 70%;
  height: auto;
`;
