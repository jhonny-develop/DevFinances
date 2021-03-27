import * as S from './styles'

const Balance = () => {
  return (
    <>
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
    </>
  )
}

export default Balance
