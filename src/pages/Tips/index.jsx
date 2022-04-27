import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title';
import * as S from './Tips.styles';
import Footer from '../../components/Footer';
import Tag from '../../components/Tag';
import TagModal from '../../components/TagModal';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';

export default function Tips() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const items = [
    {
      title: 'Para o grande dia...',
      itemTitle: 'Chegue com antecedência',
      sentences: [
        'Não podemos nos atrasar, ok?',
        'Pedimos que seja 30 minutos antes da cerimônia.'
      ],
      icon: <Clock />
    }
  ];

  return (
    <div>
      <S.Header>
        <S.Arrow onClick={() => navigate('/')}/>
        <Title isHeader={true} label="Dicas para o grande dia" />
        <S.IconSmall /> 
      </S.Header>

      <S.MainContainer>
        <Tag
          hasTagBg={true}
          handleOpenModal={handleToggleModal}
        />
        <Tag title="Endereço" />
        <Tag title="Padrinhos" />
        <Tag title="Madrinhas" />
        <Tag title="Instruções" />
        <Tag title="Inspirações" />
      </S.MainContainer>

      <Footer />

      <TagModal
        open={isModalOpen}
        onClose={handleToggleModal}
        items={items}
      />
    </div>
  )
}
