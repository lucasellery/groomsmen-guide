import React from 'react';
import {
  HomeContainer,
  MainHomeContainer,
  Title,
  Footer,
  Button,
  Arrow,
  ImageGroomsmen
} from './Home.styles';

export default function Home() {
  return (
    <MainHomeContainer>
      <HomeContainer>
        <Title>Manual dos Padrinhos</Title>
        {/* <Image src="../../assets/images/main-page.svg" alt="" /> */}
        <ImageGroomsmen />
        <Button onClick={() => {}}>
          <span>Começar</span>
          <Arrow />
        </Button>
      </HomeContainer>

      <Footer>
        Powered by Lucas Ellery
      </Footer>
    </MainHomeContainer>
  )
}
