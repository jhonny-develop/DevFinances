import * as S from './styles'

const Balance = () => {
  return (
    <>
      <S.Balance>
        <S.Title>Balanço</S.Title>
        <S.Card>
          <S.Subtitles>Entradas</S.Subtitles>
          <S.Paragraph>R$ 5.000,00</S.Paragraph>
        </S.Card>
        <S.Card>
          <S.Subtitles>Saídas</S.Subtitles>
          <S.Paragraph>R$ 2.000,00</S.Paragraph>
        </S.Card>
        <S.Card>
          <S.Subtitles>Total</S.Subtitles>
          <S.Paragraph>R$ 3.000,00</S.Paragraph>
        </S.Card>
      </S.Balance>
    </>
  )
}

export default Balance
