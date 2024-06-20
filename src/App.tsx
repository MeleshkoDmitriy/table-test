import { useEffect, useState } from 'react'
import './App.css'
import { Table } from './components/Table/Table'
import { getColumns } from './utils/getColumns';
import { getRows } from './utils/getRows';
import { TColumns, TRows } from './types/types';

function App() {
  const [ columns, setColumns ] = useState<TColumns>([]);
  const [ rows, setRows ] = useState<TRows>([]);

  useEffect(() => {
    getColumns()
      .then((cols) => {
        setColumns(cols);
        getRows(cols)
          .then((rows) => {
            setRows(rows);
      })
    }).catch((error) => console.error(error))
  }, [])

  return (
    <main>
      {
        rows.length  ? (
          <Table columns={columns} rows={rows} />
            ) : (
          <h1>Loading...</h1>    
        )
      }
    </main>
  )
}

export default App
