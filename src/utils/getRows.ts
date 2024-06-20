import { TColumns, TRows } from '../types/types';

export async function getRows(columns: TColumns): Promise<TRows> {
  const rowsNumber = Math.floor(Math.random() * 99) + 2;
  const rows: TRows = [];

  for (let i = 1; i <= rowsNumber; i++) {
    const singleRow: boolean[] = [];

    for (let j = 0; j < columns.length; j++) {
      singleRow.push(Math.random() > 0.5);
    }

    rows.push(singleRow);
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  return rows;
}
