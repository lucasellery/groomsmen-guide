import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title';
import * as S from './Tips.styles';
import Footer from '../../components/Footer';
import Tag from '../../components/Tag';
import TagModal from '../../components/TagModal';
import { generalRules, groomsmen, bridesmaid, inspiration, address } from '../../utils/rules';

export default function Tips() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tipType, setTipType] = useState('');

  function getTipItem(tip) {
    const tips = {
      'generalRules': generalRules,
      'groomsmen': groomsmen,
      'bridesmaid': bridesmaid,
      'inspiration': inspiration,
      'address': address,
      'default': '',
    };

    return tips[tip] || tips['default'];
  }

  const handleToggleModal = (type) => {
    setTipType(type);
    setIsModalOpen(!isModalOpen);
  }

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
          handleOpenModal={() => handleToggleModal('generalRules')}
        />
        <Tag
          title="Endereço"
          handleOpenModal={() => handleToggleModal('address')}
        />
        <Tag
          title="Padrinhos"
          handleOpenModal={() => handleToggleModal('groomsmen')}
        />
        <Tag
          title="Madrinhas"
          handleOpenModal={() => handleToggleModal('bridesmaid')}
        />
        <Tag
          title="Instruções"
        />
        <Tag
          title="Inspirações"
          handleOpenModal={() => handleToggleModal('inspiration')}
        />
      </S.MainContainer>

      <Footer />

      <TagModal
        open={isModalOpen}
        onClose={handleToggleModal}
        items={getTipItem(tipType)}
      />
    </div>
  )
}
