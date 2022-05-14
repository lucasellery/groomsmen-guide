import React from 'react';
import * as S from './Tag.styles';

export default function Tag({ title, handleOpenModal, hasTipDarkColor }) {
  return (
    <S.Container onClick={handleOpenModal} hasTipDarkColor={hasTipDarkColor}>
      <p>{title}</p>
    </S.Container>
  )
}
