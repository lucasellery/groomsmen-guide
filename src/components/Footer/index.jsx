import React from 'react'
import * as S from './Footer.styles';
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <S.Footer>
      <div>
        <a href="https://www.linkedin.com/in/lucas-arruda-ellery-82753118a/" target="_blank" rel="noreferrer"><AiOutlineLinkedin color='black' /></a>
        <a href="https://github.com/lucasellery" target="_blank" rel="noreferrer"><AiFillGithub color='black' /></a>
        <a href="https://www.instagram.com/llucasellery/" target="_blank" rel="noreferrer"><AiOutlineInstagram color='black' /></a>
      </div>

      <span>Powered by Lucas Ellery</span>
    </S.Footer>
  )
}
