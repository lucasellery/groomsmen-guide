import React from 'react';
import * as S from './Tag.styles';

export default function Tag({ title, hasTagBg }) {
  return (
    <S.Container>
      {hasTagBg ? (
        <S.Couple />
      ) : (
        <p>{title}</p>
      )}
    </S.Container>
  )
}
