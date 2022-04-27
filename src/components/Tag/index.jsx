import React from 'react';
import * as S from './Tag.styles';

export default function Tag({ title, hasTagBg, handleOpenModal }) {
  return (
    <S.Container onClick={handleOpenModal}>
      {hasTagBg ? (
        <S.Couple />
      ) : (
        <p>{title}</p>
      )}
    </S.Container>
  )
}
