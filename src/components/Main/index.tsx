import * as S from './styles'

const Main = () => {
  return (
    <>
      <S.Wrapper>
        <S.Balance>
          <S.Title>Balanço</S.Title>
          <S.Card>
            <h3>Entradas</h3>
            <p>R$ 5.000,00</p>
          </S.Card>
          <S.Card>
            <h3>Saídas</h3>
            <p>R$ 2.000,00</p>
          </S.Card>
          <S.Card>
            <h3>Total</h3>
            <p>R$ 3.000,00</p>
          </S.Card>
        </S.Balance>
        <S.Transaction>
          <h2>Transações</h2>
          <S.DataTable></S.DataTable>
        </S.Transaction>
      </S.Wrapper>
      <S.Footer>@2021 dev.finance$</S.Footer>
    </>
  )
}

export default Main
