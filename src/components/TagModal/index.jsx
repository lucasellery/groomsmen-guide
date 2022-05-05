import React from 'react';
import Inspirations from '../Inspirations';
import Title from '../Title';
import MainModal from './MainModal';
import * as S from './TagModal.styles';

export default function TagModal({
  open,
  onClose,
  items
}) {
  return (
    <>
      {open && (
        <S.Backdrop>
          <S.Modal>
            {items?.map((item) => (
              <div key={item.id}>
                <S.Header>
                  <S.Close onClick={onClose} />
                  <Title isHeader={true} label={item.title} />
                </S.Header>

                {item.title === 'Inspirações' ? (
                  <Inspirations />
                ) : (
                  <MainModal item={item} />
                )}
              </div>
            ))}
          </S.Modal>
        </S.Backdrop>
      )}
    </>
  )
}
