import * as S from './styles'

const Transactions = () => {
  return (
    <>
      <S.Transaction>
        <h2>Transações</h2>
        <S.Table>
          <S.TableHeader>
            <tr>
              <S.TableHead>Descrição</S.TableHead>
              <S.TableHead>Valor</S.TableHead>
              <S.TableHead>Data</S.TableHead>
            </tr>
          </S.TableHeader>
          <S.TableBody>
            <tr>
              <S.DataTable>Luz</S.DataTable>
              <S.DataTable>-R$500,00</S.DataTable>
              <S.DataTable>23/01/2021</S.DataTable>
            </tr>
            <tr>
              <S.DataTable>Projeto Web</S.DataTable>
              <S.DataTable>R$5000,00</S.DataTable>
              <S.DataTable>23/01/2021</S.DataTable>
            </tr>
          </S.TableBody>
        </S.Table>
      </S.Transaction>
    </>
  )
}

export default Transactions
