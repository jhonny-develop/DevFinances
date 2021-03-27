import styled from 'styled-components'

export const Transaction = styled.section``

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  color: ${(props) => props.theme.colors.colorTableHead};
`

export const TableHeader = styled.thead`
  tr th:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  tr th:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }
`

export const TableHead = styled.th`
  background: ${(props) => props.theme.colors.white};

  font-weight: normal;
  padding: 1rem 2rem;

  text-align: left;
`

export const TableBody = styled.tbody`
  tr td:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  tr td:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }

  tr {
    opacity: 0.7;
  }

  tr:hover {
    opacity: 1;
  }
`

export const DataTable = styled.td`
  background: ${(props) => props.theme.colors.white};
  padding: 1rem 2rem;
`
