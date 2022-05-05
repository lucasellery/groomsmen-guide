import styled from 'styled-components';
import { ReactComponent as TagCouple } from '../../assets/images/tag-couple.svg';


export const Container = styled.div`
  width: 150px;
  height: 150px;

  background: #E7ECEF;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: 'Oleo Script Swash Caps';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 55px;
  }
`;

export const Couple = styled(TagCouple)`
  width: auto;
`; 