import React, { useEffect } from 'react';
import Title from '../Title';
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
            {items?.map(item => (
              <div>
                <S.Header>
                  <S.Close onClick={onClose}/>
                  <Title isHeader={true} label={item.title}/>
                </S.Header>

                <S.Main>
                  <div className="little-tips-item">
                    {item.icon}
                    <div className="little-tips-item-labels">
                      <S.ItemTitle>{item.itemTitle}</S.ItemTitle>
                      <div className="little-tips-item-sentences">
                        {item?.sentences?.map(sentence => (
                          <>
                            <span>{sentence}</span><br />
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </S.Main>
              </div>
            ))}
          </S.Modal>
        </S.Backdrop>
      )}
    </>
  )
}
