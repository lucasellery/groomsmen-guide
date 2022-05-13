import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import * as S from './Home.styles';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github-icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';

export default function Home() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <S.MainHomeContainer>
      <S.ImageGroomsmen />

      <S.Button onClick={() => navigate('/tips')}>
        <span>Começar</span>
      </S.Button>

      <S.Footer>
        <div>
          <LinkedinIcon />
          <GithubIcon />
          <InstagramIcon />
        </div>
        <span>Powered by Lucas Ellery</span>
      </S.Footer>
    </S.MainHomeContainer>
  )
}
