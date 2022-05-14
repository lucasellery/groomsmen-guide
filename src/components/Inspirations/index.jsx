import * as S from './Inspirations.style';

export default function Inspirations() {
  return (
    <S.InspirationContainer>
      <S.GroomsmenImageContainer>
        <S.Title>Aos padrinhos:</S.Title>
        <S.Image src="https://i.pinimg.com/564x/d8/3f/f1/d83ff1f82892faa00032501305508602.jpg" alt="" />
        <S.More><a href="https://pin.it/39ejHan" target="_blank" rel="noreferrer" >Clique aqui</a> para mais inspirações</S.More>
      </S.GroomsmenImageContainer>
      <S.BridesmaidImageContainer>
        <S.Title>Às madrinhas:</S.Title>
        <S.Image src="https://i.pinimg.com/564x/f2/68/5c/f2685c2f2616ec81c381b5061fbfb1f7.jpg" alt="" />
        <S.More><a href="https://pin.it/6CuPK65" target="_blank" rel="noreferrer">Clique aqui</a> para mais inspirações</S.More>
      </S.BridesmaidImageContainer>
    </S.InspirationContainer>
  )
}
