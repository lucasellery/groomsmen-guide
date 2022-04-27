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
import Footer from '../../components/Footer';

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

      <Footer />
    </MainHomeContainer>
  )
}
