import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as S from './Tips.styles';
import Footer from '../../components/Footer';
import Tag from '../../components/Tag';
import TagModal from '../../components/TagModal';
import { dateHour, groomsmen, bridesmaid, inspiration, address, tips as tipsTag } from '../../utils/rules';
import { ReactComponent as MainIcon } from '../../assets/icons/main-icon.svg';

export default function Tips() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tipType, setTipType] = useState('');

  function getTipItem(tip) {
    const tips = {
      'dateHour': dateHour,
      'groomsmen': groomsmen,
      'bridesmaid': bridesmaid,
      'inspiration': inspiration,
      'address': address,
      'tips': tipsTag,
      'default': '',
    };

    return tips[tip] || tips['default'];
  }

  const handleToggleModal = (type) => {
    setTipType(type);
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <S.Container>
        <S.Header>
          <S.Arrow onClick={() => navigate('/')} />
          <S.TitleWithIcon>
            <MainIcon />
            <span>Manual dos Padrinhos</span>
          </S.TitleWithIcon>
        </S.Header>

        <S.MainContainer>
          <Tag
            title="Datas e horários"
            handleOpenModal={() => handleToggleModal('dateHour')}
          />
          <Tag
            title="Endereço"
            handleOpenModal={() => handleToggleModal('address')}
            hasTipDarkColor={true}
          />
          <Tag
            title="Padrinhos"
            handleOpenModal={() => handleToggleModal('groomsmen')}
          />
          <Tag
            title="Madrinhas"
            handleOpenModal={() => handleToggleModal('bridesmaid')}
            hasTipDarkColor={true}
          />
          <Tag
            title="Dicas"
            handleOpenModal={() => handleToggleModal('tips')}
          />
          <Tag
            title="Inspirações"
            handleOpenModal={() => handleToggleModal('inspiration')}
            hasTipDarkColor={true}
          />
        </S.MainContainer>

        <Footer />
      </S.Container>

      <TagModal
        open={isModalOpen}
        onClose={handleToggleModal}
        items={getTipItem(tipType)}
      />
    </>
  )
}
