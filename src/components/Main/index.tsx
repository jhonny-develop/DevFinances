import * as S from './styles'
import Balance from '../Balance'

const Main = () => {
  return (
    <>
      <S.Wrapper>
        <Balance />
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
