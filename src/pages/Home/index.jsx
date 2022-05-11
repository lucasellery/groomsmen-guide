import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import * as S from './Home.styles';

export default function Home() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  console.log(isMobile)

  return (
    <S.MainHomeContainer>
      <S.ImageGroomsmen />

      <S.Button onClick={() => navigate('/tips')}>
        <span>Começar</span>
      </S.Button>

      <S.Footer>
        <span>Powered by Lucas Ellery</span>
        {!isMobile && (
          <div>
            
          </div>
        )}
      </S.Footer>
    </S.MainHomeContainer>
  )
}
