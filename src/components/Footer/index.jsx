import React from 'react'
import * as S from './Footer.styles';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github-icon.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';

export default function Footer() {
  return (
    <S.Footer>
      <a href="https://www.linkedin.com/in/lucas-arruda-ellery-82753118a/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      <a href="https://github.com/lucasellery" target="_blank" rel="noreferrer"><GithubIcon /></a>
      <a href="https://www.instagram.com/llucasellery/" target="_blank" rel="noreferrer"><Instagram /></a>
    </S.Footer>
  )
}
