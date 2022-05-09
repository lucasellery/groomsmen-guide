import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Home.styles';

export default function Home() {
  const navigate = useNavigate();

  return (
    <S.MainHomeContainer>
      <S.ImageGroomsmen />

      <S.Button onClick={() => navigate('/tips')}>
        <span>Começar</span>
      </S.Button>

      <S.Footer>
        <span>Powered by Lucas Ellery</span>
      </S.Footer>
    </S.MainHomeContainer>
  )
}
