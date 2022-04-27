import React from 'react'
import { Title as TitleH1 } from './Title.styles';

export default function Title({ label, isHeader = false }) {
  return (
    <TitleH1 isHeader={isHeader}>{label}</TitleH1>
  )
}
