import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Home.styles';
import Footer from '../../components/Footer';

export default function Home() {
  const navigate = useNavigate();

  return (
    <S.MainHomeContainer>
      <S.ImageGroomsmen />

      <S.Button onClick={() => navigate('/tips')}>
        <span>Começar</span>
      </S.Button>
    </S.MainHomeContainer>
  )
}
