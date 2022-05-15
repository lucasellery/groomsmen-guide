import MainModal from "../TagModal/MainModal";
import Title from "../Title";
import * as S from './InfoContainerDesktop.styles';

export function InfoContainerDesktop({
  show,
  items
}) {
  return (
    <>
      {show && (
        <S.Container>
          {items?.map((item) => (
              <div key={item.id}>
                <S.Header>
                  <Title isHeader={true} label={item.title} />

                </S.Header>

                <MainModal item={item} />

                {/* {item.title === 'Inspirações' ? (
                  <Inspirations />
                ) : (
                )} */}
              </div>
            ))}
        </S.Container>
      )}
    </>
  );
}