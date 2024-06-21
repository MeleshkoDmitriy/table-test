import { FC, useEffect, useState } from 'react';
import { Table } from './components/Table/Table';
import { getColumns } from './utils/getColumns';
import { getRows } from './utils/getRows';
import { TColumns, TRows } from './types/types';

export const App: FC = () => {
  const [columns, setColumns] = useState<TColumns>([]);
  const [rows, setRows] = useState<TRows>([]);

  useEffect(() => {
    getColumns()
      .then((cols) => {
        setColumns(cols);
        getRows(cols).then((rows) => {
          setRows(rows);
        });
      })
      .catch((error) => console.error(error));
  }, []);

  if (!rows.length) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main>
      <Table columns={columns} rows={rows} />
    </main>
  );
};
