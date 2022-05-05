import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeContainer,
  MainHomeContainer,
  Button,
  Arrow,
  ImageGroomsmen
} from './Home.styles';
import Title from '../../components/Title';

export default function Home() {
  const navigate = useNavigate();

  return (
    <MainHomeContainer>
      <HomeContainer>
        <Title isHeader={false} label="Manual dos Padrinhos" />

        <ImageGroomsmen />

        <Button onClick={() => navigate('/tips')}>
          <span>Começar</span>
          <Arrow />
        </Button>
      </HomeContainer>
    </MainHomeContainer>
  )
}
