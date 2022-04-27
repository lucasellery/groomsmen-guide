import React from 'react'
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title';
import * as S from './Tips.styles';
import Footer from '../../components/Footer';
import Tag from '../../components/Tag';

export default function Tips() {
  const navigate = useNavigate();

  return (
    <div>
      <S.Header>
        <S.Arrow onClick={() => navigate('/')}/>
        <Title isHeader={true} label="Dicas para o grande dia" />
        <S.IconSmall /> 
      </S.Header>

      <S.MainContainer>
        <Tag hasTagBg={true} />
        <Tag title="Endereço" />
        <Tag title="Padrinhos" />
        <Tag title="Madrinhas" />
        <Tag title="Instruções" />
        <Tag title="Inspirações" />
      </S.MainContainer>

      <Footer />
    </div>
  )
}
