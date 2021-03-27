import * as S from './styles'
import Balance from '../Balance'
import Transactions from '../Transactions'

const Main = () => {
  return (
    <>
      <S.Wrapper>
        <Balance />
        <Transactions />
      </S.Wrapper>
      <S.Footer>&copy;2021 dev.finance$</S.Footer>
    </>
  )
}

export default Main
