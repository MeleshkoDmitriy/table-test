import { useEffect, useState } from 'react'
import './App.css'
import { Table } from './components/Table/Table'
import { getColumns } from './utils/getColumns';
import { getRows } from './utils/getRows';

function App() {
  const [ columns, setColumns ] = useState();
  const [ rows, setRows ] = useState();

  useEffect(() => {
    getColumns().then((cols) => {
      setColumns(cols);
      getRows(cols).then((rows) => {
        setRows(rows);
      })
    })
  }, [])

  return (
    <main>
      <Table columns={columns} rows={rows} />
    </main>
  )
}

export default App
