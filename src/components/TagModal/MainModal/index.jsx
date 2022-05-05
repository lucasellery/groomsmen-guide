import * as S from './MainModal.styles';

export default function MainModal({ item }) {
  return (
    <S.Main>
      <div className="little-tips-item">
        {item.inspirationUrl ? (
          <a href={item.inspirationUrl} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        ) : (
          item.icon
        )}
        <div className="little-tips-item-labels">
          <S.ItemTitle>{item.itemTitle}</S.ItemTitle>
          <div className="little-tips-item-sentences">
            {item?.sentences?.map(sentence => (
              <>
                <p>{sentence}</p>
              </>
            ))}
          </div>
        </div>
      </div>

      {item.title === 'Endereço' && (
        <div style={{overflow: 'hidden', background: 'none'}}>
          <iframe
            title="Wedding address map"
            width="100%"
            height="230px"
            src={item.addressMapUrl}
            frameborder="0"
            scrolling="no"
          />
        </div>
      )}
    </S.Main>
  )
}
